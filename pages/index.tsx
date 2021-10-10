import React from 'react';
import { GetAllRecipesResponse } from '../interfaces/api/getAllRecipesResponse';
import { HomePage } from '../components/Home';
import { Layout } from '../components/Layout';
import { request } from '../lib/datocms';

const HOMEPAGE_QUERY = `query HomePage {
  allRecipes {
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

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });

  return {
    props: { data }
  };
}

export default function Home({ data } : { data: GetAllRecipesResponse }) {
  return  <>
  <Layout><HomePage recipes={data.allRecipes} /></Layout>
  </>;
}
