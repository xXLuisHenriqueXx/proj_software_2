import { memo } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

import { featuredData } from "@src/static/FeaturedData";
import { useAppNavigation } from "@src/hooks/useAppNavigation";
import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

const Featured = () => {
  const { appNavigation } = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em destaque</Text>

      <View style={styles.containerContent}>
        {featuredData.map((item) => (
          <Pressable
            key={item.id}
            style={styles.button}
            android_ripple={{
              color: HIGHLIGHT_COLOR,
              borderless: false,
              foreground: true,
            }}
            onPress={() =>
              appNavigation.navigate("ProductList", {
                filter: { search: item.name },
              })
            }
          >
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default memo(Featured);
