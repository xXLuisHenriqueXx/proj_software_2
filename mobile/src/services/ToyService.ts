import {
  IToyCreate,
  IToyDelete,
  IToyGet,
  IToyList,
  IToyUpdate,
} from "@src/common/Interfaces/Toy.interface";
import * as SecureStore from "expo-secure-store";
import { api } from "./Api";

export const toyService = {
  get: async (params: IToyList) => {
    const response = await api.get("/api/toys/list", { params });

    return response;
  },

  getByID: async (params: IToyGet) => {
    const response = await api.get(`/api/toys/${params.id}`);

    return response;
  },

  create: async (params: IToyCreate) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.post("/api/toys", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  update: async (params: IToyUpdate) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.patch(`/api/toys/${params.id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },

  delete: async (params: IToyDelete) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const token = await SecureStore.getItemAsync(key);
    const response = await api.delete(`/api/toys/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
