import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

import { categoriesData } from "@src/static/CategoriesData";
import { EToyType } from "@src/common/Interfaces/Toy.interface";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { memo } from "react";

interface ICategoriesProps {
  onSearch: (value: EToyType) => void;
}

const Categories = ({ onSearch }: ICategoriesProps) => {
  const { width } = useWindowDimensions();

  const widthCategory = (width - 48 - 16) / 2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar categorias</Text>

      <View style={styles.containerContent}>
        {categoriesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.containerItem, { width: widthCategory }]}
            activeOpacity={0.85}
            onPress={() => onSearch(item.value)}
          >
            <Text style={styles.text}>{item.name}</Text>

            <item.icon size={20} color={HIGHLIGHT_COLOR} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(Categories);
