import { memo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Button } from "@src/components/Button";

import { ICategory } from "@src/common/Entities/Category";

interface IItemProps {
  data: ICategory;
  onPress: () => void;
}

const Item = ({ data, onPress }: IItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Button.Square icon={data.icon} onPress={onPress} />

      <Text style={styles.text}>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default memo(Item);
