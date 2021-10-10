import React from 'react'
import { Recipe } from '../interfaces/models/recipe'
import { RecipeComponent } from './Recipe'
import styles from '../styles/Home.module.css'
import { Hero } from './Hero'


interface Props {
  recipes: Recipe[];
}

export const HomePage = (props: Props) => {
  return (
    <>
      <Hero/>
      <h1 className={styles.header}>Favorite Recpes</h1>
      <ul className={styles.card_wrapper}>
        {props.recipes.map(r => <RecipeComponent recipe={r} key={r.id} />)}
      </ul>
    </>
     
  )
}
