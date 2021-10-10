import { Ingredient } from './ingredient';
import { Unit } from './unit';

export interface IngredientAmount {
  unitId: Unit;
  amount: number;
  ingredientId: Ingredient;  
}