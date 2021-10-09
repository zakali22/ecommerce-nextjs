import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from '../../lib/useCurrentUser';

const DELETE_CARTITEM_MUTATION = gql`
  mutation DELETE_CARTITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function DeleteCartItem({ id }) {
  const [deleteCartItem, { loading }] = useMutation(DELETE_CARTITEM_MUTATION, {
    variables: {
      id,
    },
    // refetchQueries: [{ query: CURRENT_USER_QUERY }], // Remove from cache instead
    update,
  });

  return (
    <button type="button" className="cart-item-del" onClick={deleteCartItem}>
      &times;
    </button>
  );
}

DeleteCartItem.propTypes = {
  id: PropTypes.string,
};
