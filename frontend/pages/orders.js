import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import useCurrentUser from '../lib/useCurrentUser';
import formatPrice from '../lib/formatPrice';

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

export default function OrdersPage() {
  const user = useCurrentUser();

  console.log(user);
  const ordersList = user?.order;

  function totalItemsInOrder(order) {
    return order.items.reduce(
      (total, orderItem) => total + orderItem.quantity,
      0
    );
  }

  return (
    <>
      <Head />
      <h2>You have {ordersList.length} orders</h2>
      <OrderUl>
        {ordersList.length &&
          ordersList.map((order) => (
            <OrderItemStyles key={order.id}>
              <Link href={`/order/${order.id}`}>
                <div>
                  <div className="order-meta">
                    <p>{totalItemsInOrder(order)} items</p>
                    <p>{formatPrice(order.total)}</p>
                    <p>{order.items.length} products</p>
                  </div>
                  <div className="images">
                    {order.items.map((orderItem) => (
                      <img
                        key={orderItem.id}
                        src={orderItem.photo.image.publicUrlTransformed}
                        alt={orderItem.photo.altText}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </OrderItemStyles>
          ))}
      </OrderUl>
    </>
  );
}
