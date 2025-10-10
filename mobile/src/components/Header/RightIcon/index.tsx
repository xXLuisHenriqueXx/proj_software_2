import { TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LucideIcon } from "lucide-react-native";

import { PRIMARY_COLOR_75 } from "@src/constants/Colors";

interface IRightIconProps {
  icon: LucideIcon;
  onPress: () => void;
}

const RightIcon = ({ icon: Icon, onPress }: IRightIconProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Icon size={24} color={PRIMARY_COLOR_75} />
    </TouchableOpacity>
  );
};

export default RightIcon;
