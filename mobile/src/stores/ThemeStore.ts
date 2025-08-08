import { create } from "zustand";

import { theme } from "@src/styles";

export type ThemeType = typeof theme;

interface ThemeState {
  theme: ThemeType;
}

export const useThemeStore = create<ThemeState>(() => ({
  theme,
}));
