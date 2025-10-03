import { View, Text } from "react-native";
import { styles } from "./styles";

import { featuredData } from "@src/static/FeaturedData";

const Featured = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em destaque</Text>

      <View style={styles.containerContent}>
        {featuredData.map((item) => (
          <Text key={item.id} style={styles.text}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Featured;
