import { useAppNavigation } from "../useAppNavigation";

export function useAccess() {
  const { authNavigation } = useAppNavigation();

  return {
    handleNavigateToLogin: () => authNavigation.navigate("Login"),
    handleNavigateToRegister: () => authNavigation.navigate("Register"),
  };
}
