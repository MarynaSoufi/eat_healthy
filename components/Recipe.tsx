import React from 'react'
import Link from 'next/link'
import { Recipe } from '../interfaces/models/recipe'
import styles from '../styles/Recipe.module.css';
import Image from 'next/image'

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
      <Link href={urlDetails} as={urlDetails} passHref>
       <div className={styles.imageContainer}>
        <Image className={styles.image} src={image.url} alt="recipe_picture" layout="fill" />
       </div>
      </Link>
      <h2>{name}</h2>
      <p className={styles.card_descr}>
          {description.slice(0,85).concat('...')}
      </p>
     
    
    </li>
  )
}