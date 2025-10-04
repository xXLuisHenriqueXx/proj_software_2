import { useNavigation } from "@react-navigation/native";
import { PropsAuthStack } from "@src/routes/stacks/AuthStack";

export function useAccess() {
  const navigation = useNavigation<PropsAuthStack>();

  return {
    handleNavigateToLogin: () => navigation.navigate("Login"),
    handleNavigateToRegister: () => navigation.navigate("Register"),
  };
}
