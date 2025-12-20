import type { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";
import type { Categories } from "../types";

// type Category = {};

export type RecipeSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>
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
    });
  }
});