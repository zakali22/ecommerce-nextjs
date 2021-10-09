/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Nav from './Nav';
import { Logo } from './styles/Logo';
import { HeaderStyle } from './styles/Header';
import Search from './Search';
import Cart from './Cart/Cart';

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <Logo>Sick Fits</Logo>
      </Link>
      <Nav />
      <Search />
      <Cart />
    </HeaderStyle>
  );
}
