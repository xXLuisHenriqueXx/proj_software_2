import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { PropsAuthStack } from "@src/routes/stacks/AuthStack";

export function useAccess() {
  const navigation = useNavigation<PropsAuthStack>();

  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const handleNavigateToRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  return { handleNavigateToLogin, handleNavigateToRegister };
}
