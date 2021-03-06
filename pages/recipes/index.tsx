import React from 'react';
import { request } from '../../lib/datocms';
import { GetRecipeByIdResponse } from '../../interfaces/api/getRecipeByIdResponse';
import { RecipeExtendedComponent } from '../../components/RecipeExtended';
import { Layout } from '../../components/Layout';

const RECIPE_DETAILS_QUERY = `query RecipeDetails($id: ItemId) {
  recipe(filter: { id: { eq: $id } }) {
    id
    name
    slug
    description
    content
    image {
      url
    }
    servings
    cookTime
    preparationTime
    createdAt
    ingredientAmount {
      unitId {
        title
      }
      amount
      ingredientId {
        name
        vegan
        vegeterian
      }
    }
  }
}`;


Home.getInitialProps = async ({ query }: { query: { id: string } }) => {
  if (!query.id) {
    return { data: null };
  }

  const data = await request({
    query: RECIPE_DETAILS_QUERY,
    variables: { id: query.id }
  });  

  return { data };
}

export default function Home({ data }: { data: GetRecipeByIdResponse }) {
  if (!data) {
    return <p>NO DATA</p>
  }
  return  <>
  <Layout>
  <RecipeExtendedComponent recipe={data.recipe} />
  </Layout>
  </>;
}
