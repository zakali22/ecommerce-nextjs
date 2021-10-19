import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        name
        email
        order {
          id
          total
          charge
          items {
            id
            name
            description
            price
            quantity
            photo {
              altText
              id
              image {
                publicUrlTransformed
              }
            }
          }
        }
        cart {
          id
          quantity
          product {
            id
            name
            price
            description
            photo {
              id
              image {
                publicUrlTransformed
              }
              altText
            }
          }
        }
      }
    }
  }
`;

export default function useCurrentUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);

  return data?.authenticatedItem;
}
