import React from 'react';
import { request } from '../../lib/datocms';
import { GetRecipeByIdResponse } from '../../interfaces/api/getRecipeByIdResponse';
import { RecipeExtendedComponent } from '../../components/RecipeExtended';

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

// export async function getStaticProps() {
//   const data = await request({
//     query: RECIPE_DETAILS_QUERY,
//     variables: { id: "64310946" }
//   });

//   return {
//     props: { data }
//   };
// }

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
  return <RecipeExtendedComponent recipe={data.recipe} />;
}
