import { ActivityIndicator, Pressable, Text } from "react-native";
import { styles } from "./styles";

import { CANCEL_COLOR } from "@src/constants/Colors";

interface IDestructiveProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
}

const Destructive = ({ text, onPress, loading }: IDestructiveProps) => {
  return (
    <Pressable
      style={styles.button}
      android_ripple={{
        color: CANCEL_COLOR,
        borderless: false,
        foreground: true,
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={CANCEL_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default Destructive;
