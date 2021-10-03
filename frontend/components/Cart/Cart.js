/* eslint-disable import/no-unresolved */
import CartStyles from '../styles/CartStyles';
import Supreme from '../styles/Supreme';
import useCurrentUser from '../../lib/useCurrentUser';
import CartItem from './CartItem';

export default function Cart() {
  const user = useCurrentUser();

  if (!user) return null;
  console.log(user.cart);

  return (
    <CartStyles open>
      <header>
        <Supreme>{user.name}'s cart</Supreme>
      </header>
      <ul>
        {/* {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))} */}
      </ul>
      <footer>
        <p>Footer</p>
      </footer>
    </CartStyles>
  );
}
