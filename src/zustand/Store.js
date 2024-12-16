// store.js
import { create } from "zustand";

export const useScrollStore = create((set) => ({
  activeRow: 0, // Tracks which row is visible
  totalRows: 0, // Set dynamically based on data

  // Actions to move rows
  nextRow: () => set((state) => ({ activeRow: Math.min(state.activeRow + 1, state.totalRows - 1) })),
  prevRow: () => set((state) => ({ activeRow: Math.max(state.activeRow - 1, 0) })),

  setTotalRows: (total) => set({ totalRows: total }),
}));
