import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { useCart } from '../../lib/cartState';
import { CURRENT_USER_QUERY } from '../../lib/useCurrentUser';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ productId }) {
  console.log(productId);
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id: productId },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const { openCart } = useCart();

  return (
    <button
      disabled={loading}
      type="button"
      onClick={async (e) => {
        e.preventDefault();
        await addToCart();
        openCart();
      }}
    >
      Add to cart
    </button>
  );
}

AddToCart.propTypes = {
  productId: PropTypes.string,
};
