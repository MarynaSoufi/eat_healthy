import { Ingredient } from './ingredient';
import { Unit } from './unit';

export interface IngredientAmount {
  unit: Unit;
  amount: number;
  ingredientId: Ingredient;  
}