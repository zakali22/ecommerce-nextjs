/* eslint-disable import/no-unresolved */
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Sick Fits</h1>
      </Link>
      <div className="search-wrapper">
        <input type="text" name="search" placeholder="Search" />
      </div>
      <Nav />
    </header>
  );
}
