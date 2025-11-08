import { memo, useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { styles } from "./styles";
import Toast from "react-native-toast-message";

import { Header } from "@src/components/Header";
import Item from "../Item";
import EmptyList from "@src/components/EmptyList";
import LoaderSkeleton from "@src/components/LoaderSkeleton";

import { IProduct } from "@src/common/Entities/Product";
import { favoriteService } from "@src/services/FavoriteService";
import { WIDTH } from "@src/constants/Values";

interface IFavoritesProps {
  refreshing: boolean;
  setOpenSheet: (id: string) => void;
}

const Favorites = ({ refreshing, setOpenSheet }: IFavoritesProps) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleFetchFavorites = useCallback(async () => {
    try {
      const response = await favoriteService.get();

      setFavorites(response?.data ?? []);
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Aviso",
        text2: error.message || "Ocorreu um erro ao buscar os favoritos",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchFavorites();
  }, [handleFetchFavorites, refreshing]);

  const renderItem = useCallback<ListRenderItem<IProduct>>(
    ({ item }) => (
      <Item data={item} onOptionsPress={() => setOpenSheet(item.id)} />
    ),
    [setOpenSheet]
  );

  const keyExtractor = useCallback((item: IProduct) => item.id, []);

  if (loading) {
    return <LoaderSkeleton width={WIDTH - 48} height={192} />;
  }

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Seus favoritos"
          subtitle="Gerencie seus produtos favoritados"
        />
      </Header.Root>

      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerContent}
        ListEmptyComponent={<EmptyList />}
        initialNumToRender={4}
        windowSize={5}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};

export default memo(Favorites);
