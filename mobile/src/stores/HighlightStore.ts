import { create } from "zustand";

import { IHighlight } from "@src/common/Entities/Highlight";
import { highlightService } from "@src/services/HighlightService";

interface IHighlightsState {
  highlights: IHighlight[];
  fetchHighlights: () => Promise<void>;
}

export const useHighlightsStore = create<IHighlightsState>((set) => ({
  highlights: [],

  fetchHighlights: async () => {
    try {
      const response = await highlightService.get();

      set({ highlights: response.data });
    } catch (error) {
      console.error("Failed to fetch highlights:", error);
    }
  },
}));
