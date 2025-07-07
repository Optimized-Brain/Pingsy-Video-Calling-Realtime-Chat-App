import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("pingy-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("pingy-theme", theme);
    set({ theme });
  },
}));