import React from 'react'
import { Recipe } from '../interfaces/models/recipe'
import Image from 'next/image'
import personPic from '../public/user.png'
import timePic from '../public/time.png'
import { Ingredient } from './Ingredient'
import styles from '../styles/RecipeExtended.module.css';
import { checkForNegativeAttribute } from '../helpers/recipeHelper'

interface Props {
  recipe: Recipe; 
}

export const RecipeExtendedComponent = (props: Props) => {
  const { recipe } = props;
  const { name, content, cookTime, servings, preparationTime, image, ingredientAmount, description } = recipe; 
  
  const isNotVegan = checkForNegativeAttribute(ingredientAmount, "vegan");
  const isNotVegeterian = checkForNegativeAttribute(ingredientAmount, "vegeterian");
  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.info_wrapper}>
        <div className={styles.image_wrapper}>
          <Image src={image.url} alt="recipe_picture" layout="fill" className={styles.image}/>
        </div>
        <div  className={styles.icons_wrapper}>
          <div className={styles.description}>{description}</div>
          <div>
            <span></span>
            <span> Dieet: {!isNotVegan && "VEGAN, "} {!isNotVegeterian && "VEGETERIAN"}</span>
            <br/>
          </div>
          <div>
            <span>Servings: {servings} persons</span>
          </div>
          <div>
            <span>Preparation Time: </span>
            <span>{preparationTime} min</span>
          </div>
          <div>
            <span>Cook Time: </span>
            <span>{cookTime} min</span>
          </div>
        </div>
      </div>
     
      
      <div className={styles.recipe_wraper}>
        <div className={styles.recipe_ingredint}>
            <h3>Ingredients</h3>
            <ul>{ingredientAmount.map((i) => <Ingredient ingredient={i} key={i.id} />)}</ul>
        </div>

        <div className={styles.recipe_method}>
           <h3>Method</h3>
            <p>{content.split('\n').map((r, index) => { return <p key={index}>{r}</p>;})}</p>
        </div>
      </div>
   
    
    </div>
  )
}