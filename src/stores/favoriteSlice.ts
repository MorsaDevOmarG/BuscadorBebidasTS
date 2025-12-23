import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    // console.log(recipe);
    // console.log(get().favorites);

    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      // console.log('Si existe');
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
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
  },
});
