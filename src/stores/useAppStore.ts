import { create } from "zustand";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

// ...a = toma una copia de todos los argumentos
export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType>()(devtools( (...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
})));