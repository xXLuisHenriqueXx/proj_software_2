import { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { ICategory } from "@src/common/Entities/Category";
import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface IItemProps {
  data: ICategory;
  onPress: () => void;
}

const Item = ({ data, onPress }: IItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.image}>
        <data.icon size={24} color={BACKGROUND_PRIMARY_COLOR} />
      </View>
      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(Item);
