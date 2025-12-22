import type { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
};

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
  categories: {
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

    await getRecipes(filters);
  },
});