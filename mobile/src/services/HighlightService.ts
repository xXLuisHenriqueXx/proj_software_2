import { api } from "./Api";
import { IHighlight, IHighlightWithToys } from "@src/common/Entities/Highlight";
import { IHighlightGetByID } from "@src/common/Interfaces/Highlight.interface";

export const highlightService = {
  async getAll(): Promise<IHighlight[]> {
    try {
      const { data } = await api.get<IHighlight[]>("/api/highlights");
      return data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch highlights"
      );
    }
  },

  async getById(params: IHighlightGetByID): Promise<IHighlightWithToys> {
    try {
      const { data } = await api.get<IHighlightWithToys>(
        `/api/highlights/${params.id}`
      );
      return data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch highlight"
      );
    }
  },
};
