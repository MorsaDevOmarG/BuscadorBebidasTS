import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../utils/recipes-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  // console.log('Desde RepiceService');

  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios(url);
  // console.log(data);
  const result = CategoriesAPIResponseSchema.safeParse(data);
  // console.log(result);

  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
  // console.log('Consultando recetas con los siguientes filtros:', filters);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios(url);
  // console.log(data);
  const result = DrinksAPIResponse.safeParse(data);
  // console.log(result);

  if (result.success) {
    return result.data;
  }
};

export async function getRecipeById(id: Drink['idDrink']) {
  // console.log(id);

  const url = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios(url);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  // console.log(result);

  if (result.success) {
    return result.data;
  }
};
