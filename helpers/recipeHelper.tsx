import { IngredientAmount } from "../interfaces/models/ingredientAmount";

export const checkForNegativeAttribute = (ingredientAmount: IngredientAmount[], fieldName: "vegan" | "vegeterian") => {
  return ingredientAmount.map(ia => ia.ingredientId).find(i => !i[fieldName]);
}