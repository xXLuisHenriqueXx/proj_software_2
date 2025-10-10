import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IRootProps {
  children: ReactNode;
  padding?: number;
  onPress?: () => void;
}

const Root = ({ children, padding = 0, onPress }: IRootProps) => {
  const isPressable = onPress !== undefined;

  return (
    <TouchableOpacity
      style={[styles.container, { paddingVertical: padding }]}
      activeOpacity={isPressable ? 0.85 : 1}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Root;
