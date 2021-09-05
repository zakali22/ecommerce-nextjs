import Link from 'next/link';
import NavStyle, { NavContainer } from './styles/NavStyles';

export default function Nav() {
  return (
    <NavContainer>
      <NavStyle>
        <Link href="/products">Shop</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/order">Orders</Link>
        <Link href="/accounts">Accounts</Link>
        <Link href="/signout">Signout</Link>
      </NavStyle>
    </NavContainer>
  );
}
