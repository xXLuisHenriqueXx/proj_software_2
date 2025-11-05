import * as SecureStore from "expo-secure-store";

import { api } from "./Api";
import { IUpdateUser } from "@src/common/Interfaces/User.interface";

export const userService = {
  get: async () => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.get("/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  update: async (params: IUpdateUser) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.patch("/api/users/me", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  delete: async () => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.delete("/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
