import { create } from "zustand";
import { createRecipesSlice } from "./recipeSlice";

// ...a = toma una copia de todos los argumentos
export const useAppStore = create( (...a) => ({
  ...createRecipesSlice(...a)
}));