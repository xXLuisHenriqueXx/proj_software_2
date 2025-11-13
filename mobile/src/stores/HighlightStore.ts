import { create } from "zustand";
import { highlightService } from "@src/services/HighlightService";
import { IHighlight } from "@src/common/Entities/Highlight";

interface HighlightState {
  highlights: IHighlight[];
  isLoading: boolean;
  error: string | null;

  fetchHighlights: () => Promise<void>;
  getHighlightById: (id: string) => Promise<IHighlight | null>;
}

export const useHighlightsStore = create<HighlightState>((set) => ({
  highlights: [],
  isLoading: false,
  error: null,

  fetchHighlights: async () => {
    set({ isLoading: true, error: null });
    try {
      const highlights = await highlightService.getAll();
      set({ highlights });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ isLoading: false });
    }
  },

  getHighlightById: async (id: string) => {
    try {
      const highlight = await highlightService.getById({ id });
      return highlight;
    } catch (err: any) {
      set({ error: err.message });
      return null;
    }
  },
}));
