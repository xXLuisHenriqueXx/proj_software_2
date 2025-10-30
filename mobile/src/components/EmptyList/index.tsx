import { memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { CircleOff, LucideIcon } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IEmptyList {
  icon?: LucideIcon;
  message?: string;
}

const EmptyList = ({ icon: Icon, message }: IEmptyList) => (
  <View style={styles.container}>
    {Icon ? (
      <Icon size={24} color={HIGHLIGHT_COLOR} />
    ) : (
      <CircleOff size={24} color={HIGHLIGHT_COLOR} />
    )}
    <Text style={styles.text}>{message || "Nenhum produto encontrado"}</Text>
  </View>
);

export default memo(EmptyList);
