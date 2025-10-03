import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface INextButtonProps {
  onNext: () => void;
}

const NextButton = ({ onNext }: INextButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onNext}
    >
      <Text style={styles.text}>Avançar</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
