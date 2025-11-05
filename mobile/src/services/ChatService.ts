import * as SecureStore from "expo-secure-store";

import { api } from "./Api";
import {
  IChatAllMessages,
  IChatCreate,
} from "@src/common/Interfaces/Chat.interface";

export const chatService = {
  get: async () => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.get("/api/chat", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  getAllMessages: async (params: IChatAllMessages) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.post("/api/chat/messages", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  create: async (params: IChatCreate) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.post("/api/chat", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
