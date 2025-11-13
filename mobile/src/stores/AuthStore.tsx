// store/auth.store.ts
import { create } from "zustand";
import Toast from "react-native-toast-message";
import { authService } from "@src/services/AuthService";
import { ILogin, IRegister } from "@src/common/Interfaces/Auth.interface";
import { IUserResponse } from "@src/common/Interfaces/User.interface";

interface AuthState {
  user: IUserResponse | null;
  token: string | null;
  isLoading: boolean;
  isSignout: boolean;

  restore: () => Promise<void>;
  login: (params: ILogin) => Promise<void>;
  register: (params: IRegister) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  isSignout: false,

  restore: async () => {
    set({ isLoading: true });
    try {
      const token = await authService.getToken();
      const user = await authService.getCurrentUser();

      set({
        token,
        user,
        isSignout: !token,
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: error.message || "Falha ao restaurar sessão",
      });
      set({ token: null, user: null, isSignout: true });
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (params: ILogin) => {
    set({ isLoading: true });
    try {
      const { token, user } = await authService.login(params);
      set({ token, user, isSignout: false });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro ao logar",
        text2: error.message || "Verifique seus dados",
      });
      set({ isSignout: true });
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (params: IRegister) => {
    set({ isLoading: true });
    try {
      const { token, user } = await authService.register(params);
      set({ token, user, isSignout: false });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro ao cadastrar",
        text2: error.message || "Verifique seus dados",
      });
      set({ isSignout: true });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await authService.logout();
      set({ token: null, user: null, isSignout: true });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Erro ao sair",
        text2: error.message || "Falha ao limpar sessão",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
