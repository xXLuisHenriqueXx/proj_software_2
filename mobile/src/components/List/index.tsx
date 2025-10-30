import { memo } from "react";
import {
  useWindowDimensions,
  ListRenderItem,
  FlatList,
  RefreshControl,
} from "react-native";
import { styles } from "./styles";

import Item from "./Item";
import EmptyList from "../EmptyList";

import { IProduct } from "@src/common/Entities/Product";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

interface IListProps {
  header?: any;
  data: IProduct[];
  refreshing?: boolean;
  onRefresh?: () => void;
  keyExtractor?: (item: IProduct) => string;
  onItemPress?: (id: string) => void;
}

const List = ({
  header,
  data,
  refreshing = false,
  onRefresh,
  keyExtractor = (item) => item.id,
  onItemPress,
}: IListProps) => {
  const { width } = useWindowDimensions();

  const { appNavigation } = useAppNavigation();

  const handleNavigateToDetail = (id: string) => {
    if (onItemPress) onItemPress(id);
    else appNavigation.navigate("ProductDetail", { id });
  };

  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <Item
      data={item}
      widthProduct={widthProduct}
      handleNavigateToDetail={handleNavigateToDetail}
    />
  );

  const widthProduct = (width - 48 - 16) / 2;
  const hasRefreshControl = !!onRefresh;

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={header}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      ListEmptyComponent={<EmptyList />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerContent}
      columnWrapperStyle={styles.containerColumn}
      refreshControl={
        hasRefreshControl ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
    />
  );
};

export default memo(List);
