import { View } from "react-native";
import { styles } from "./styles";

import { Button } from "@src/components/Button";

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
      <Button.Primary text="Acessar minha conta" onPress={onNavigateToLogin} />

      <Button.Secondary
        text="Criar conta"
        onPress={onNavigateToRegister}
        style={{ backgroundColor: "transparent" }}
      />
    </View>
  );
};

export default NavigationButtons;
