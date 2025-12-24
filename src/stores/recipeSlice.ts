import type { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSliceType } from "./favoriteSlice";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
  closeModal: () => void;
};

// export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
export const createRecipesSlice : StateCreator<RecipeSliceType & FavoritesSliceType, [], [], RecipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  // El 'as', agrega vituarlmente los valores que tiene Recipe, para no agregar 1 x 1
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    // console.log(categories);

    set({
      categories
    })
  },
  searchRecipes: async (filters) => {
    // console.log('Desde recipesSlice', filters);

    const drinks = await getRecipes(filters);
    // console.log(drinks);

    set({
      drinks
    })
  },
  selectRecipe: async (id) => {
    // console.log('Desde selectRecipe', id);

    const selectedRecipe = await getRecipeById(id);
    // console.log(selectedRecipe);

    set({
      selectedRecipe,
      modal: true
    })
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
});