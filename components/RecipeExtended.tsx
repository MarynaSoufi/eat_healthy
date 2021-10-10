import React from 'react'
import { Recipe } from '../interfaces/models/recipe'

interface Props {
  recipe: Recipe;
}

export const RecipeExtendedComponent = (props: Props) => {
  const { recipe } = props;
  const { name, description, content, cookTime } = recipe;
  const {image} = props.recipe;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img  src={image.url} alt="recipe_picture" />
      </div>
      <p>{cookTime}</p>
      <p>{content}</p>
    </div>
  )
}