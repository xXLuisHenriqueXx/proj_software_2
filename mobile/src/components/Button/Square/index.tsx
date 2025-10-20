import { Pressable } from "react-native";
import { styles } from "./styles";
import { LucideIcon } from "lucide-react-native";

import {
  BACKGROUND_PRIMARY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
} from "@src/constants/Colors";

interface ISquareProps {
  icon: LucideIcon;
  onPress: () => void;
}

const Square = ({ icon: Icon, onPress }: ISquareProps) => {
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
      <Icon size={24} color={BACKGROUND_PRIMARY_COLOR} />
    </Pressable>
  );
};

export default Square;
