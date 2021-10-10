import React from 'react'
import { IngredientAttribute } from '../interfaces/models/ingredient'

interface Props {
  handleIngredientAttributeChange: (attribute: IngredientAttribute) => void;
}

export const RecipeAttributeFilter = (props: Props) => {
  const onIngredientAttributeChange = (e: any) => props.handleIngredientAttributeChange(e.target.value);
  return (
    <select onChange={onIngredientAttributeChange}>
        <option value={IngredientAttribute.All}>All</option>
        <option value={IngredientAttribute.Vegan}>Vegan</option>
        <option value={IngredientAttribute.Vegeterian}>Vegeterian</option>
      </select>
  )
}
