import React from 'react'
import Link from 'next/link'
import LinesEllipsis from 'react-lines-ellipsis';
import { Recipe } from '../interfaces/models/recipe'
import styles from '../styles/Recipe.module.css';

interface Props {
  recipe: Recipe;
}

export const RecipeComponent = (props: Props) => {
  const { recipe } = props;
  const { id, name, description } = recipe;
  const urlDetails = `/recipes?id=${id}`;
  const {image} = props.recipe;
  return (
    <li className={styles.card}>
      <Link href={urlDetails} as={urlDetails}>
       <img className={styles.image} src={image.url} alt="recipe_picture" />
      </Link>
      <h2>{name}</h2>
      <LinesEllipsis className={styles.card_descr}
          text={description}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
      />
     
    
    </li>
  )
}