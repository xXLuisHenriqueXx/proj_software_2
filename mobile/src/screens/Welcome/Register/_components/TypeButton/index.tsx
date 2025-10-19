import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_PRIMARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";

const TypeButton = ({
  label,
  isActive,
  onPress,
}: {
  label: string;
  isActive: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[
      styles.button,
      { backgroundColor: isActive ? HIGHLIGHT_COLOR : "transparent" },
    ]}
    activeOpacity={0.85}
    onPress={onPress}
  >
    <Text
      style={[
        styles.text,
        { color: isActive ? BACKGROUND_PRIMARY_COLOR : HIGHLIGHT_COLOR },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default TypeButton;
