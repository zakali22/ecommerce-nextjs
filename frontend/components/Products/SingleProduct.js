import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

export const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const SingleProductStyle = styled.div`
  display: flex;

  img {
    max-width: 500px;
    height: auto;
    margin-right: 50px;
    object-fit: contain;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  const { product } = data;

  return (
    <SingleProductStyle>
      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.photo.altText}
      />
      <div className="detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </SingleProductStyle>
  );
}

SingleProduct.propTypes = {
  id: PropTypes.string,
};
