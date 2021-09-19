import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import EditForm from '../EditForm.tsx';

const SINGLE_PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
      status
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

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $status: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: {
        name: $name
        description: $description
        status: $status
        price: $price
      }
    ) {
      id
      name
      description
      status
      price
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

export default function UpdateProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  const { Product } = data;
  console.log(Product);

  return <EditForm product={Product} />;
}

UpdateProduct.propTypes = {
  id: PropTypes.string,
};
