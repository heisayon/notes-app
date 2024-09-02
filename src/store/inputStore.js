import { create } from "zustand";

export const useStore = create((set) => ({
  input: "",
  setInput: (userInput) => set({ input: userInput }),
}));


