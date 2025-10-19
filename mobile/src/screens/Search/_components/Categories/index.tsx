import { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { categoriesData } from "@src/static/CategoriesData";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const Categories = () => {
  const { appNavigation } = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar categorias</Text>

      <View style={styles.containerContent}>
        {categoriesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.containerItem}
            activeOpacity={0.85}
            onPress={() =>
              appNavigation.navigate("ProductList", {
                filter: { type: item.value },
              })
            }
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
