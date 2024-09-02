import { create } from "zustand";

export const useNotes = create((set) => ({
  notes: [],
  setNotes: (data) => set({ notes: data }),
  updateNotes: (data) => set((state) => ({ notes: [data, ...state.notes] })),
  delete: (id) =>
    set((state) => ({ notes: state.notes.filter((note) => note.$id !== id) })),
}));
