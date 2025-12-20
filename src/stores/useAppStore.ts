import { create } from "zustand";
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice";

// ...a = toma una copia de todos los argumentos
export const useAppStore = create<RecipeSliceType>( (...a) => ({
  ...createRecipesSlice(...a)
}));