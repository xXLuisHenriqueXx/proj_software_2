import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
  validateStatus: (status) => status >= 200 && status <= 500,
});
