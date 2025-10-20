import { ActivityIndicator, Pressable, Text } from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
} from "@src/constants/Colors";

interface IPrimaryProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
}

const Primary = ({ text, onPress, loading }: IPrimaryProps) => {
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
        <ActivityIndicator size="small" color={BACKGROUND_PRIMARY_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default Primary;
