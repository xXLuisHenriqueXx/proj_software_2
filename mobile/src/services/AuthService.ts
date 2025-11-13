import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./Api";
import { ILogin, IRegister } from "@src/common/Interfaces/Auth.interface";

const TOKEN_KEY = process.env.EXPO_PUBLIC_SECURE_TOKEN ?? "secure_token";

const storage = {
  async saveSession(token: string, user: any) {
    await Promise.all([
      SecureStore.setItemAsync(TOKEN_KEY, token),
      AsyncStorage.setItem("@user", JSON.stringify(user)),
    ]);
  },

  async getToken() {
    return SecureStore.getItemAsync(TOKEN_KEY);
  },

  async getUser() {
    const user = await AsyncStorage.getItem("@user");
    return user ? JSON.parse(user) : null;
  },

  async clearSession() {
    await Promise.all([
      SecureStore.deleteItemAsync(TOKEN_KEY),
      AsyncStorage.removeItem("@user"),
    ]);
  },
};

export const authService = {
  async register(params: IRegister) {
    try {
      const { data } = await api.post("/api/auth/register", params);
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  async login(params: ILogin) {
    try {
      const { data } = await api.post("/api/auth/login", params);
      const { token, user } = data;

      if (!token) throw new Error("Token not received from server");
      await storage.saveSession(token, user);

      return { token, user };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  async logout() {
    await storage.clearSession();
  },

  async getCurrentUser() {
    return storage.getUser();
  },

  async getToken() {
    return storage.getToken();
  },
};
