import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface INavigationButtonsProps {
  onNavigateToLogin: () => void;
  onNavigateToRegister: () => void;
}

const NavigationButtons = ({
  onNavigateToLogin,
  onNavigateToRegister,
}: INavigationButtonsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.85}
        onPress={onNavigateToLogin}
      >
        <Text style={styles.textLogin}>Acessar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRegister}
        activeOpacity={0.85}
        onPress={onNavigateToRegister}
      >
        <Text style={styles.textRegister}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationButtons;
