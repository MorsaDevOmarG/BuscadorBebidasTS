import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  SearchFilterSchme,
} from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchme>;
