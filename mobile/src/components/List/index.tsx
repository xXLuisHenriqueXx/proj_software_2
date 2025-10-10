import { memo } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  ListRenderItem,
  FlatList,
  RefreshControl,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { CircleOff } from "lucide-react-native";

import Item from "./Item";

import { PropsAppStack } from "@src/routes/stacks/AppStack";
import { IProduct } from "@src/common/Entities/Product";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IListProps {
  header?: any;
  data: IProduct[];
  refreshing?: boolean;
  onRefresh?: () => void;
  keyExtractor?: (item: IProduct) => string;
  onItemPress?: (id: string) => void;
  emptyMessage?: string;
}

const EmptyList = ({ message }: { message?: string }) => (
  <View style={styles.containerNotFound}>
    <CircleOff size={24} color={HIGHLIGHT_COLOR} />
    <Text style={styles.textNotFound}>
      {message || "Nenhum produto encontrado"}
    </Text>
  </View>
);

const List = ({
  header,
  data,
  refreshing = false,
  onRefresh,
  keyExtractor = (item) => item.id,
  onItemPress,
  emptyMessage,
}: IListProps) => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<PropsAppStack>();

  const handleNavigateToDetail = (id: string) => {
    if (onItemPress) onItemPress(id);
    else navigation.navigate("ProductDetail", { id });
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
      ListEmptyComponent={<EmptyList message={emptyMessage} />}
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
