/* eslint-disable import/no-unresolved */
import CartStyles from '../styles/CartStyles';
import Supreme from '../styles/Supreme';
import useCurrentUser from '../../lib/useCurrentUser';
import CartItem from './CartItem';
import totalCartCalc from '../../lib/totalCartCalc';
import formatPrice from '../../lib/formatPrice';

export default function Cart() {
  const user = useCurrentUser();

  if (!user) return null;

  // Total in cart
  // Product
  // total Price = quantity * price each

  return (
    <CartStyles open>
      <header>
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
