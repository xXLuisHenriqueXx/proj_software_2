import * as SecureStore from "expo-secure-store";

import { api } from "./Api";
import { IHistoryRemove } from "@src/common/Interfaces/History.interface";

export const historyService = {
  get: async () => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.get("/api/history", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  remove: async (params: IHistoryRemove) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.patch(
      `/api/history/${params.id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  },
};
