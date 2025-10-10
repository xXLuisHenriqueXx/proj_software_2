import { View, Text } from "react-native";
import { styles } from "./styles";

import { ICategory } from "@src/common/Entities/Category";
import { BACKGROUND_PRIMARY_COLOR } from "@src/constants/Colors";

interface IItemProps {
  data: ICategory;
}

const Item = ({ data }: IItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <data.icon size={24} color={BACKGROUND_PRIMARY_COLOR} />
      </View>
      <Text style={styles.text}>{data.name}</Text>
    </View>
  );
};

export default Item;
