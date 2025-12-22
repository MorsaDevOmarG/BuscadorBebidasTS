import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponse,
  DrinksAPIResponse,
  SearchFilterSchme,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchme>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
