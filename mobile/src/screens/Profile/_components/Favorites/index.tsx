import { FlatList, ListRenderItem, View } from "react-native";
import { styles } from "./styles";

import { Header } from "@src/components/Header";
import Item from "./Item";
import EmptyList from "@src/components/EmptyList";

import { IProduct } from "@src/common/Entities/Product";

interface IFavoritesProps {
  data?: IProduct[];
  setOpenSheet: (id: string) => void;
  setSelectedID: (value: string) => void;
}

const Favorites = ({ data, setOpenSheet, setSelectedID }: IFavoritesProps) => {
  const renderItem: ListRenderItem<IProduct> = ({ item }) => (
    <Item
      data={item}
      setOpenSheet={() => setOpenSheet(item.id)}
      setSelectedID={setSelectedID}
    />
  );

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Content
          title="Seus favoritos"
          subtitle="Gerencie seus produtos favoritados"
        />
      </Header.Root>

      <FlatList
        contentContainerStyle={styles.containerContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

export default Favorites;
