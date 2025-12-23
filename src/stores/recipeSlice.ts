import type { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
};

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
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
    console.log('Desde selectRecipe', id);
  },
});