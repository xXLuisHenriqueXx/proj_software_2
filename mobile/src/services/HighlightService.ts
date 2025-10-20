import { IHighlightGetByID } from "@src/common/Interfaces/Highlight.interface";
import { api } from "./Api";

export const highlightService = {
  get: async () => {
    const response = await api.get("/api/highlights");

    return response;
  },

  getById: async (params: IHighlightGetByID) => {
    const response = await api.get(`/api/highlights/${params.id}`);

    return response;
  },
};
