import Link from 'next/link';
import styled from 'styled-components';
import NavStyle, { NavContainer } from './styles/NavStyles';
import useCurrentUser from '../lib/useCurrentUser';
import { useCart } from '../lib/cartState';

const CartCounter = styled.span`
  position: relative;
  top: -9px;
  right: -6px;
  background: red;
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
`;

export default function Nav() {
  const { id, cart } = useCurrentUser();
  const { openCart } = useCart();

  console.log(cart);

  return (
    <NavContainer>
      <NavStyle>
        <Link href="/products">Shop</Link>
        {id ? (
          <>
            <Link href="/sell">Sell</Link>
            <Link href="/order">Orders</Link>
            <Link href="/accounts">Accounts</Link>
            <button type="button" onClick={openCart}>
              Cart
              <CartCounter>{cart.length}</CartCounter>
            </button>
            <Link href="/signout">Signout</Link>
          </>
        ) : (
          <>
            <Link href="/signin">Signin</Link>
          </>
        )}
      </NavStyle>
    </NavContainer>
  );
}