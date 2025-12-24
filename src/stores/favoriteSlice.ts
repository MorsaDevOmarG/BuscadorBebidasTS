import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

// export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipeSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    // console.log(recipe);
    // console.log(get().favorites);

    // if (get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)) {
    if (get().favoriteExists(recipe.idDrink)) {
      // console.log('Si existe');
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));

      createNotificationSlice(set, get, api).showNotification({
        text: "Se eliminó de favoritos",
        error: false,
      });
    } else {
      // console.log('No existe..');

      // set({
      //   favorites: [...get().favorites, recipe]
      // })

      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));

      createNotificationSlice(set, get, api).showNotification({
        text: "Se agregó a favoritos",
        error: false,
      });
    }

    createRecipesSlice(set, get, api).closeModal();

    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },

  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});
