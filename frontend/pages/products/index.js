import { useRouter } from 'next/router';
import ProductListing from '../../components/Products/ProductsListing';
import Pagination from '../../components/Pagination';

export default function ProductPage() {
  // also {query} as an args
  const {
    query: { pageNum },
  } = useRouter();
  console.log(parseInt(pageNum));

  return (
    <>
      <Pagination currPage={parseInt(pageNum) || 1} />
      <ProductListing currPage={parseInt(pageNum) || 1} />
    </>
  );
}
