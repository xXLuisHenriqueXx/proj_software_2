import * as SecureStore from "expo-secure-store";

import { api } from "./Api";
import { ILogin, IRegister } from "@src/common/Interfaces/Auth.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authService = {
  register: async (params: IRegister) => {
    const response = await api.post("/api/auth/register", params);
    console.log(response);

    return response;
  },

  login: async (params: ILogin) => {
    const key = process.env.EXPO_PUBLIC_SECURE_TOKEN;
    if (!key) return;

    const response = await api.post("/api/auth/login", params);
    await SecureStore.setItemAsync(key, response.data.token);
    await AsyncStorage.setItem("@user", JSON.stringify(response.data.user));

    return response;
  },
};
