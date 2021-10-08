import CartStyles from '../styles/CartStyles';
import CloseButton from '../styles/CloseButton';
import Supreme from '../styles/Supreme';
import useCurrentUser from '../../lib/useCurrentUser';
import CartItem from './CartItem';
import totalCartCalc from '../../lib/totalCartCalc';
import formatPrice from '../../lib/formatPrice';
import { useCart } from '../../lib/cartState';

export default function Cart() {
  const user = useCurrentUser();
  const { closeCart, cartOpen } = useCart();

  if (!user) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
        <Supreme>{user.name}'s cart</Supreme>
        <p>
          You have {user.cart.length} item{user.cart.length > 1 ? 's' : ''} in
          your cart
        </p>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>Total: {formatPrice(totalCartCalc(user.cart))}</p>
      </footer>
    </CartStyles>
  );
}
