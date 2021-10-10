export interface Ingredient {
  name: string;
  vegan: boolean;
  vegeterian: boolean;
}

export enum IngredientAttribute {
  All = 1,
  Vegan,
  Vegeterian
}
