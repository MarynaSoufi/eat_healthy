import React from 'react'
import { IngredientAmount } from '../interfaces/models/ingredientAmount';

interface Props {
  ingredient: IngredientAmount; 
}


export const Ingredient = (props: Props) => {
  const { ingredient } = props;
  const { amount, unitId, ingredientId } = ingredient;
  return (
    <li>
      <p>{amount} {unitId.title} {ingredientId.name}</p>
     
    </li>
  )
}
