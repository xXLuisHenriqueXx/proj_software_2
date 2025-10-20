import { Text, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_SECONDARY_COLOR,
  HIGHLIGHT_COLOR,
} from "@src/constants/Colors";

interface ISecondaryProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
}

const Secondary = ({ text, onPress, loading }: ISecondaryProps) => {
  return (
    <Pressable
      style={styles.button}
      android_ripple={{
        color: BACKGROUND_SECONDARY_COLOR,
        borderless: false,
        foreground: true,
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={HIGHLIGHT_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default Secondary;
