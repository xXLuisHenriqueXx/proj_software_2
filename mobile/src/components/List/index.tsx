import { memo } from "react";
import {
  ListRenderItem,
  FlatList,
  RefreshControl,
  View,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";

import Item from "./Item";
import EmptyList from "../EmptyList";

import { IProduct } from "@src/common/Entities/Product";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { WIDTH } from "@src/constants/Values";

interface IListProps {
  header?: any;
  data: IProduct[];
  refreshing?: boolean;
  onRefresh?: () => void;
  keyExtractor?: (item: IProduct) => string;
  onItemPress?: (id: string) => void;
  onEndReached?: () => void;
  loadingMore?: boolean;
}

const List = ({
  header,
  data,
  refreshing = false,
  onRefresh,
  keyExtractor = (item) => item.id,
  onItemPress,
  onEndReached,
  loadingMore = false,
}: IListProps) => {
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

  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="small" />
      </View>
    );
  };

  const widthProduct = (WIDTH - 48 - 16) / 2;
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
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerContent}
      columnWrapperStyle={styles.containerColumn}
      refreshControl={
        hasRefreshControl ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      onEndReachedThreshold={0.3}
      onEndReached={onEndReached}
      removeClippedSubviews
      maxToRenderPerBatch={6}
      initialNumToRender={6}
      windowSize={6}
    />
  );
};

export default memo(List);
