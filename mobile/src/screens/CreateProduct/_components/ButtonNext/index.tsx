import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IButtonNextProps {
  onPress: () => void;
}

const ButtonNext = ({ onPress }: IButtonNextProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={styles.text}>Continuar</Text>
    </TouchableOpacity>
  );
};

export default ButtonNext;
