import Link from 'next/link';
import NavStyle, { NavContainer } from './styles/NavStyles';
import useCurrentUser from '../lib/useCurrentUser';

export default function Nav() {
  const isSignedIn = useCurrentUser();

  console.log(isSignedIn);

  return (
    <NavContainer>
      <NavStyle>
        <Link href="/products">Shop</Link>
        {isSignedIn ? (
          <>
            <Link href="/sell">Sell</Link>
            <Link href="/order">Orders</Link>
            <Link href="/accounts">Accounts</Link>
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
