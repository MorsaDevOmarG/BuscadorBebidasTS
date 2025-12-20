import type { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";

// type Category = {};

export type RecipeSliceType = {
  categories: Category[];
  fetchCategories: () => Promise<void>
};

export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
  categories: [],
  fetchCategories: async () => {
    const categories = await getCategories();
    // console.log(categories);

    set({
      categories
    });
  }
});