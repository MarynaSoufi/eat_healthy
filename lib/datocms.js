import { GraphQLClient } from "graphql-request";

/**
 * setup a GraphQL client and connect to DatoCMS
 */
export function request({ query, variables, preview = false }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.token}`
    }
  });

  return client.request(query, variables);
}