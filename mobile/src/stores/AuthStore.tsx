import { Alert } from "react-native";
import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ILogin, IRegister } from "@src/common/Interfaces/Auth.interface";
import { authService } from "@src/services/AuthService";
import { IUserResponse } from "@src/common/Entities/User";

const TOKEN_KEY = process.env.EXPO_PUBLIC_SECURE_TOKEN;
const USER_KEY = "@user";

interface AuthState {
  user: IUserResponse | null;
  token: string | null;
  isLoading: boolean;
  isSignout: boolean;
  register: (params: IRegister) => Promise<void>;
  login: (params: ILogin) => Promise<void>;
  logout: () => Promise<void>;
  restore: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  isSignout: false,

  restore: async () => {
    set({ isLoading: true });

    try {
      if (!TOKEN_KEY) return;
      const storedToken = await SecureStore.getItemAsync(TOKEN_KEY);

      const userString = await AsyncStorage.getItem(USER_KEY);
      const user = userString ? JSON.parse(userString) : null;

      set({
        user,
        token: storedToken,
        isLoading: false,
        isSignout: !storedToken,
      });
    } catch (err) {
      console.log(err);
      set({ isLoading: false, token: null, isSignout: true });
    }
  },

  logout: async () => {
    set({ token: null, isSignout: true });

    if (!TOKEN_KEY) return;
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await AsyncStorage.removeItem(USER_KEY);
  },

  login: async (params: ILogin) => {
    const response = await authService.login(params);

    if (!response || response.status >= 400) {
      Alert.alert(
        "Erro ao logar",
        response?.data?.message || "Verifique seus dados"
      );

      return;
    }

    const token = response.data.token;
    const user = response.data.user;

    if (token && TOKEN_KEY) {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
    if (user && USER_KEY) {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    set({
      user,
      token,
      isSignout: false,
    });
  },

  register: async (params: IRegister) => {
    const response = await authService.register(params);

    if (!response || response.status >= 400) {
      Alert.alert(
        "Erro ao cadastrar",
        response?.data?.message || "Verifique seus dados"
      );
      return;
    }

    const token = response.data.token;
    const user = response.data.user;

    if (token && TOKEN_KEY) {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
    }
    if (user && USER_KEY) {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    set({
      user,
      token,
      isSignout: false,
    });
  },
}));
