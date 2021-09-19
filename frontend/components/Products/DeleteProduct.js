import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
// import { ALL_PRODUCTS_QUERY } from './ProductsListing';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { data, loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
      //   refetchQueries: [{ query: ALL_PRODUCTS_QUERY }], /* One way of refreshing the UI */
      update(cache, payload) {
        cache.evict(cache.identify(payload.data.deleteProduct));
      },
    }
  );

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        deleteProduct();
        Router.push({
          pathname: '/products',
        });
      }}
    >
      {children}
    </button>
  );
}

DeleteProduct.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};
