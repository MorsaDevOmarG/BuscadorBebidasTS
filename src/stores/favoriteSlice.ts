import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipesSlice, RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe['idDrink']) => boolean;
};

// export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType, [], [], FavoritesSliceType> = (
  set,
  get,
  api
) => ({
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
    } else {
      // console.log('No existe..');

      // set({
      //   favorites: [...get().favorites, recipe]
      // })

      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
    }

    createRecipesSlice(set, get, api).closeModal()
  },
  favoriteExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id);
  }
});
