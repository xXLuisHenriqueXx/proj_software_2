import { memo } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import { Button } from "@src/components/Button";

import { useAccess } from "@src/hooks/Welcome/useAccess";

const NavigationButtons = () => {
  const { onNavigateToLogin, onNavigateToRegister } = useAccess();

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

export default memo(NavigationButtons);
