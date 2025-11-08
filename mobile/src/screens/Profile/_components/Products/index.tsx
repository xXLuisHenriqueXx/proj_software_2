import { memo, useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import Item from "../Item";
import EmptyList from "@src/components/EmptyList";

import { IProduct } from "@src/common/Entities/Product";

interface IProductsProps {
  data?: IProduct[];
  setOpenSheet: (id: string) => void;
}

const Products = ({ data = [], setOpenSheet }: IProductsProps) => {
  const renderItem = useCallback<ListRenderItem<IProduct>>(
    ({ item }) => (
      <Item data={item} onOptionsPress={() => setOpenSheet(item.id)} />
    ),
    [setOpenSheet]
  );

  const keyExtractor = useCallback((item: IProduct) => item.id, []);

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Seus produtos"
          subtitle="Gerencie seus produtos cadastrados"
        />
      </Header.Root>

      <FlatList
        data={data}
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

export default memo(Products);
