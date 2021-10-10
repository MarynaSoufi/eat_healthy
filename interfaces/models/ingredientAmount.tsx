import { Ingredient } from './ingredient';
import { Unit } from './unit';

export interface IngredientAmount {
  id: string;
  unitId: Unit;
  amount: number;
  ingredientId: Ingredient;  
}

