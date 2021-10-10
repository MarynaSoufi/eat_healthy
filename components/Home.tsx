import React, { useState } from 'react'
import { Recipe } from '../interfaces/models/recipe'
import { RecipeComponent } from './Recipe'
import styles from '../styles/Home.module.css'
import { Hero } from './Hero'
import { IngredientAttribute } from '../interfaces/models/ingredient'
import { checkForNegativeAttribute } from '../helpers/recipeHelper'
import { RecipeAttributeFilter } from './RecipeAttributeFilter'


interface Props {
  recipes: Recipe[];
}

export const HomePage = (props: Props) => {
  const [selectedAttribute, setSelectedAttribute] = useState<IngredientAttribute>(IngredientAttribute.All);

  const handleIngredientAttributeChange = (attribute: IngredientAttribute) => setSelectedAttribute(attribute);
  const showRecipesBySelectedAttribute = (): Recipe[] => {
    if (selectedAttribute == IngredientAttribute.Vegan) {
      return props.recipes.filter(r => !checkForNegativeAttribute(r.ingredientAmount, "vegan"));
    }
    if (selectedAttribute == IngredientAttribute.Vegeterian) {
      return props.recipes.filter(r => !checkForNegativeAttribute(r.ingredientAmount, "vegeterian"));
    }
    return props.recipes;
  }
  return (
    <>
      <Hero />
      <h1 className={styles.header}>Favorite Recipes</h1>
      <RecipeAttributeFilter handleIngredientAttributeChange={handleIngredientAttributeChange}/>
      <ul className={styles.card_wrapper}>
        {showRecipesBySelectedAttribute().map(r => <RecipeComponent recipe={r} key={r.id} />)}
      </ul>
    </>

  )
}
