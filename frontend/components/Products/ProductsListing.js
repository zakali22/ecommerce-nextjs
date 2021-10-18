import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Product from './Product';
import { ProductListingStyle } from '../styles/ProductListing';
import { perPage } from '../../config';

// Defined in Graphql playground
export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int, $take: Int) {
    products(skip: $skip, take: $take) {
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

export default function ProductListing({ currPage }) {
  console.log(currPage);
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: currPage * perPage - perPage,
      take: perPage,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <ProductListingStyle>
      {data?.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductListingStyle>
  );
}

ProductListing.propTypes = {
  currPage: PropTypes.number,
};
