import { IngredientAmount } from './ingredientAmount';
import { Image } from './image';

export interface Recipe {
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string;
  image: Image;
  servings: number;
  cookTime: number;
  preparationTime: number;
  createdAt: Date;
  ingredientAmount: IngredientAmount[];
}