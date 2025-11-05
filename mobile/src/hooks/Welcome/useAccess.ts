import { useAppNavigation } from "../useAppNavigation";

export function useAccess() {
  const { authNavigation } = useAppNavigation();

  return {
    onNavigateToLogin: () => authNavigation.navigate("Login"),
    onNavigateToRegister: () => authNavigation.navigate("Register"),
  };
}
