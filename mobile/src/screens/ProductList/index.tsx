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

  useEffect(() => {
    if (!filter) return;

    setSearch(filter?.search);
    fetchToys(1, 20, { ...filter }).then((toys) => setToys(toys));
  }, []);

  const handleSearch = () => {
    fetchToys(1, 20, { search }).then((toys) => setToys(toys));
  };

  if (loading) return <Loader />;

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
    />
  );
};

export default ProductList;
