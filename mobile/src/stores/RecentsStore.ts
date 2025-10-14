import { recentSearchService } from "@src/services/RecentSearchService";
import { create } from "zustand";

interface IRecentState {
  recents: string[];
  fetchRecents: () => Promise<void>;
  saveRecent: (search: string) => Promise<void>;
}

export const useRecentsStore = create<IRecentState>((set) => ({
  recents: [],

  fetchRecents: async () => {
    try {
      const response = await recentSearchService.getAll();

      set({ recents: response });
    } catch (error) {
      console.error("Failed to fetch recents:", error);
    }
  },

  saveRecent: async (search: string) => {
    try {
      await recentSearchService.save(search);
    } catch (error) {
      console.error("Failed to save recent:", error);
    }
  },
}));
