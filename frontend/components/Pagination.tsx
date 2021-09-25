import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { perPage } from '../config';

type PaginationProps = {
  currPage: number;
};

const ALL_PRODUCTS_META_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

const PaginationStyle = styled.div`
  display: flex;
  border: 1px solid var(--lightGray);
  box-shadow: 1px 4px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 9px;
  width: max-content;
  justify-content: flex-start;
  margin: 0 auto;
  margin-bottom: 30px;

  & > * {
    padding: 15px 25px;
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    &:not(:last-child) {
      border-right: 1px solid var(--lightGray);
    }
  }

  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default function Pagination({ currPage }: PaginationProps) {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_META_QUERY);

  if (loading) return <p>Loading</p>;

  const {
    _allProductsMeta: { count: totalProductCount },
  } = data; // Get total number of products

  const pageCount = Math.ceil(totalProductCount / perPage); // Total number of pages

  return (
    <PaginationStyle>
      <Head>
        <title>
          Sick fits Products | Page {currPage} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${currPage - 1}`}>
        <a aria-disabled={currPage <= 1}>&#8592; Prev</a>
      </Link>
      <p>
        Page {currPage} of {pageCount}
      </p>
      <p>{totalProductCount} Items Total</p>
      <Link href={`/products/${currPage + 1}`}>
        <a aria-disabled={currPage >= pageCount}>Next &#8594;</a>
      </Link>
    </PaginationStyle>
  );
}
