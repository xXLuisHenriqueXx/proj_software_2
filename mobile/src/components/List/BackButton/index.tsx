import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";

import { HIGHLIGHT_COLOR } from "@src/constants/Colors";

interface IBackButtonProps {
  onClose: () => void;
}

const BackButton = ({ onClose }: IBackButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClose}
      style={styles.button}
      activeOpacity={0.7}
    >
      <ChevronLeft size={24} color={HIGHLIGHT_COLOR} />
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
