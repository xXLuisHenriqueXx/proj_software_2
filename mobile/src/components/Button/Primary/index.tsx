import { memo, useMemo } from "react";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
} from "@src/constants/Colors";

interface IPrimaryProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const Primary = ({
  text,
  onPress,
  loading = false,
  disabled = false,
  style,
}: IPrimaryProps) => {
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
        color: BACKGROUND_SECONDARY_COLOR,
        borderless: false,
        foreground: true,
      }}
      disabled={loading || disabled}
      onPress={handlePress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={BACKGROUND_PRIMARY_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default memo(Primary);
