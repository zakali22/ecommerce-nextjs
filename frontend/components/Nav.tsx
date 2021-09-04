import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/accounts">Accounts</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/order">Order</Link>
    </nav>
  );
}
