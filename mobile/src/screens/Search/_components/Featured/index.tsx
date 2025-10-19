import { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { featuredData } from "@src/static/FeaturedData";
import { useAppNavigation } from "@src/hooks/useAppNavigation";

const Featured = () => {
  const { appNavigation } = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em destaque</Text>

      <View style={styles.containerContent}>
        {featuredData.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            onPress={() =>
              appNavigation.navigate("ProductList", {
                filter: { search: item.name },
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(Featured);
