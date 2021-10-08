import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatPrice from '../../lib/formatPrice';

const CartItemStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  img {
    max-width: 120px;
    height: auto;
    object-fit: contain;
    margin-right: 20px;
  }

  .cart-item-desc {
    margin-right: auto;
  }
`;

export default function CartItem({ cartItem }) {
  if (!cartItem.product) return null;

  return (
    <CartItemStyle>
      <img
        src={cartItem.product.photo.image.publicUrlTransformed}
        alt={cartItem.product.photo.image.altText}
      />
      <div className="cart-item-desc">
        <p>{cartItem?.product?.name}</p>
        <p>
          {formatPrice(parseInt(cartItem.quantity) * cartItem.product.price)} -{' '}
          {cartItem.quantity} &times; {formatPrice(cartItem.product.price)}
        </p>
      </div>
      <span>&times;</span>
    </CartItemStyle>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
