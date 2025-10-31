import { memo, useMemo } from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import { styles } from "./styles";
import { LucideIcon } from "lucide-react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
} from "@src/constants/Colors";

type ISquareProps = PressableProps & {
  icon: LucideIcon;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
};

const Square = ({
  icon: Icon,
  onPress,
  disabled = false,
  style,
}: ISquareProps) => {
  const pressableStyle = useMemo(
    () => [styles.button, disabled && { opacity: 0.5 }, style],
    [disabled, style]
  );

  return (
    <Pressable
      style={pressableStyle}
      android_ripple={{
        color: BACKGROUND_SECONDARY_COLOR,
        borderless: false,
        foreground: true,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Icon size={24} color={BACKGROUND_PRIMARY_COLOR} />
    </Pressable>
  );
};

export default memo(Square);
