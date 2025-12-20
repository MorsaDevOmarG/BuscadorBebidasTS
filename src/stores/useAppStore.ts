import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

// ...a = toma una copia de todos los argumentos
export const useAppStore = create<RecipeSliceType>()(devtools( (...a) => ({
  ...createRecipesSlice(...a)
})));