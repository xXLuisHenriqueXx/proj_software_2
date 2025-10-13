import { create } from "zustand";

import { IInstitute } from "@src/common/Entities/Institute";
import { instituteService } from "@src/services/InstituteService";

interface IInstitutesState {
  institutes: IInstitute[];
  fetchInstitutes: () => Promise<void>;
}

export const useInstitutesStore = create<IInstitutesState>((set) => ({
  institutes: [],

  fetchInstitutes: async () => {
    try {
      const response = await instituteService.get();

      set({ institutes: response.data });
    } catch (error) {
      console.error("Failed to fetch institutes:", error);
    }
  },
}));
