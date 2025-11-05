import { memo, useMemo } from "react";
import { Text, Pressable, ActivityIndicator, ViewStyle } from "react-native";
import { styles } from "./styles";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface ISecondaryProps {
  text: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const Secondary = ({
  text,
  onPress,
  loading = false,
  disabled = false,
  style,
}: ISecondaryProps) => {
  const pressableStyle = useMemo(
    () => [styles.button, disabled && { opacity: 0.5 }, style],
    [disabled, style]
  );

  const handlePress = useMemo(() => {
    if (loading || disabled) return;

    return onPress;
  }, [loading, disabled, onPress]);

  const renderLoading = useMemo(() => {
    return loading ? (
      <ActivityIndicator size="small" color={HIGHLIGHT_COLOR} />
    ) : (
      <Text style={styles.text}>{text}</Text>
    );
  }, [loading, text]);

  return (
    <Pressable
      style={pressableStyle}
      android_ripple={{
        color: HIGHLIGHT_COLOR,
        borderless: false,
        foreground: true,
      }}
      disabled={loading || disabled}
      onPress={handlePress}
    >
      {loading ? (
        <ActivityIndicator size="small" color={HIGHLIGHT_COLOR} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default memo(Secondary);
