import { FlatList, ListRenderItem, Text, View } from "react-native";
import { styles } from "./styles";
import { CircleOff } from "lucide-react-native";

import { Header } from "@src/components/Header";
import Item from "./Item";

import { IProduct } from "@src/common/Entities/Product";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IFavoritesProps {
  data?: IProduct[];
  setOpenSheet: (id: string) => void;
  setSelectedID: (value: string) => void;
}

const EmptyList = () => (
  <View style={styles.containerNotFound}>
    <CircleOff size={24} color={HIGHLIGHT_COLOR} />
    <Text style={styles.textNotFound}>Nenhum produto encontrado</Text>
  </View>
);

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
