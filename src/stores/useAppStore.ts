import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoriteSlice";

// ...a = toma una copia de todos los argumentos
export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools( (...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
})));