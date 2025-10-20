import { Pressable, Text } from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
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
  <Pressable
    style={[
      styles.button,
      { backgroundColor: isActive ? HIGHLIGHT_COLOR : "transparent" },
    ]}
    android_ripple={{
      color: BACKGROUND_SECONDARY_COLOR,
      borderless: false,
      foreground: true,
    }}
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
  </Pressable>
);

export default TypeButton;
