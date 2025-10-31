import { memo, useMemo } from "react";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

import { CANCEL_COLOR } from "@src/constants/Colors";

interface IDestructiveProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const Destructive = ({
  text,
  onPress,
  loading = false,
  disabled = false,
  style,
}: IDestructiveProps) => {
  const pressableStyle = useMemo(
    () => [styles.button, disabled && { opacity: 0.5 }, style],
    [disabled, style]
  );

  const handlePress = useMemo(() => {
    if (loading || disabled) return;

    return onPress;
  }, [loading, disabled, onPress]);

  return (
    <Pressable
      style={pressableStyle}
      android_ripple={{
        color: CANCEL_COLOR,
        borderless: false,
        foreground: true,
      }}
      disabled={loading || disabled}
      onPress={handlePress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={CANCEL_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default memo(Destructive);
