import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatPrice from '../../lib/formatPrice';
import DeleteCartItem from './DeleteCartItem';

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

  .cart-item-del {
    font-size: 2rem;
    font-weight: 1;
    background: none;
    border: 1px solid var(--black);
    border-radius: 2px;
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
    min-width: 3rem;
    line-height: 0.6;
    justify-content: center;
    cursor: pointer;
    height: 3rem;

    &:hover,
    &:focus {
      background: var(--red);
      color: white;
      border-color: var(--red);
    }
  }
`;

export default function CartItem({ cartItem }) {
  if (!cartItem.product) return null;
  console.log(cartItem);

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
      <DeleteCartItem id={cartItem.id} />
    </CartItemStyle>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
