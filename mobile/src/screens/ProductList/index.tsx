import { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Input } from "@src/components/Input";
import List from "@src/components/List";
import Loader from "@src/components/Loader";

import { useToys } from "@src/hooks/useToys";
import { AppStackParamList } from "@src/routes/stacks/AppStack";
import { IProduct } from "@src/common/Entities/Product";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

type Props = NativeStackScreenProps<AppStackParamList, "ProductList">;

const ProductList = ({ route }: Props) => {
  const { filter } = route.params || {};
  const { fetchToys, loading } = useToys();
  const { appNavigation } = useAppNavigation();

  const [toys, setToys] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string | undefined>("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadToys = async (pageNumber = 1, reset = false) => {
    try {
      const response = await fetchToys(pageNumber, 20, {
        ...filter,
        search,
      });

      if (reset) {
        setToys(response.toys);
      } else {
        setToys((prev) => [...prev, ...response.toys]);
      }

      setPage(response.page);
      setTotalPages(response.totalPages);
    } catch (error: any) {
      console.warn("Error loading toys:", error);
    }
  };

  useEffect(() => {
    loadToys(1, true);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await loadToys(1, true);
    } finally {
      setRefreshing(false);
    }
  };

  const handleLoadMore = async () => {
    if (loadingMore || page >= totalPages) return;
    setLoadingMore(true);
    try {
      await loadToys(page + 1);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleSearch = async () => {
    await loadToys(1, true);
  };

  if (loading && toys.length === 0) return <Loader />;

  return (
    <List
      header={
        <View style={styles.containerHeader}>
          <Input.Search
            placeholder="Pesquisar ..."
            value={search}
            onChangeText={(text) => setSearch(text)}
            onSubmitEditing={handleSearch}
            onBack={() => appNavigation.goBack()}
          />
        </View>
      }
      data={toys}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={handleLoadMore}
      loadingMore={loadingMore}
    />
  );
};

export default ProductList;
