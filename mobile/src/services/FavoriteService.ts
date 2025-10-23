import * as SecureStore from "expo-secure-store";

import { IFavoriteAdd } from "@src/common/Interfaces/Favorite.interface";
import { api } from "./Api";

export const favoriteService = {
  get: async () => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);

    const response = await api.get("/api/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  add: async (params: IFavoriteAdd) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.post("/api/favorites", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  delete: async (params: IFavoriteAdd) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.delete(`/api/favorites/${params.toyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
