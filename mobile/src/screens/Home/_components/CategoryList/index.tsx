import { memo, useCallback } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import Item from "./Item";

import { ICategory } from "@src/common/Entities/Category";
import { categoriesData } from "@src/static/CategoriesData";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const CategoryList = () => {
  const { appNavigation } = useAppNavigation();

  const renderItem: ListRenderItem<ICategory> = useCallback(
    ({ item }) => (
      <Item
        data={item}
        onPress={() =>
          appNavigation.navigate("ProductList", {
            filter: { type: item.value },
          })
        }
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Categorias"
          subtitle="Viaje por categorias para encontrar o que precisa ..."
        />
      </Header.Root>

      <FlatList
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerScrollContent}
        initialNumToRender={5}
        maxToRenderPerBatch={6}
        windowSize={5}
      />
    </View>
  );
};

export default memo(CategoryList);
