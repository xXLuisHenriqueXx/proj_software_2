import { IHighlightGet } from "@src/common/Interfaces/Highlight.interface";
import { api } from "./Api";

export const highlightService = {
  get: async () => {
    const response = api.get("/api/highlights");

    return response;
  },

  getById: async (params: IHighlightGet) => {},
};
