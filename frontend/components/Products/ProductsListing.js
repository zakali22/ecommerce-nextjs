import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Product from './Product';
import { ProductListingStyle } from '../styles/ProductListing';

// Defined in Graphql playground
const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      description
      status
      price
      photo {
        id
        altText
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function ProductListing() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data);

  return (
    <ProductListingStyle>
      {data.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListingStyle>
  );
}
