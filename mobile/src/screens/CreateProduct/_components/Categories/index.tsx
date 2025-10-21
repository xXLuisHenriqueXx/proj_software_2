import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { categoriesData } from "@src/static/CategoriesData";
import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";
import { EToyType } from "@src/common/Interfaces/Toy.interface";

interface ICategoriesProps {
  categories: EToyType[];
  onSelect: (category: EToyType) => void;
}

const Categories = ({ categories, onSelect }: ICategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha as categorias do seu anúncio</Text>

      <View style={styles.containerList}>
        {categoriesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.containerItem,
              {
                backgroundColor: categories.includes(item.value)
                  ? BACKGROUND_SECONDARY_COLOR
                  : BACKGROUND_PRIMARY_COLOR,
              },
            ]}
            activeOpacity={0.85}
            onPress={() => onSelect(item.value)}
          >
            <Text style={styles.name}>{item.name}</Text>

            <item.icon size={20} color={HIGHLIGHT_COLOR} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;
