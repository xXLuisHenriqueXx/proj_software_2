import { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { featuredData } from "@src/static/FeaturedData";

interface IFeaturedProps {
  onSearch: (value: string) => void;
}

const Featured = ({ onSearch }: IFeaturedProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Em destaque</Text>

      <View style={styles.containerContent}>
        {featuredData.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.85}
            onPress={() => onSearch(item.name)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default memo(Featured);
