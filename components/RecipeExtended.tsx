import React from 'react'
import { Recipe } from '../interfaces/models/recipe'
import Image from 'next/image'
import { Ingredient } from './Ingredient'
import styles from '../styles/RecipeExtended.module.css';


interface Props {
  recipe: Recipe; 
}

export const RecipeExtendedComponent = (props: Props) => {
  const { recipe } = props;
  const { name, content, cookTime, servings, preparationTime, image, ingredientAmount } = recipe; 
  
  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.info_wrapper}>
        <div className={styles.image_wrapper}>
          <Image src={image.url} alt="recipe_picture" layout="fill" className={styles.image}/>
        </div>
        <div  className={styles.icons_wrapper}>
          <div>
  
          </div>
          <div>
            <span>{servings}</span>
          </div>
          <div>
            <span>preparation</span>
            <span>{preparationTime}</span>
          </div>
          <div>
            <span>cook</span>
            <span>{cookTime}</span>
          </div>
        </div>
      </div>
     
      
      <hr />
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