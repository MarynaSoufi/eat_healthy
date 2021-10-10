import { Recipe } from "../models/recipe";

export interface GetAllRecipesResponse {
  allRecipes: Recipe[];
}