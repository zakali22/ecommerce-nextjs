/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Nav from './Nav';
import { Logo } from './styles/Logo';
import { HeaderStyle } from './styles/Header';

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <Logo>Sick Fits</Logo>
      </Link>
      <Nav />
      <div className="search-wrapper">
        <input type="text" name="search" placeholder="Search For An Item" />
      </div>
    </HeaderStyle>
  );
}
