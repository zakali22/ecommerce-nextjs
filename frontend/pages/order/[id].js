import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Head from 'next/head';
import OrderStyles from '../../components/styles/OrderStyles';
import formatPrice from '../../lib/formatPrice';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      total
      charge
      items {
        id
        name
        description
        price
        quantity
        photo {
          altText
          id
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function OrderPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const { Order } = data;

  return (
    <OrderStyles>
      <Head>
        <title>Sick fits - Order {Order.id}</title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{Order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{Order.charge}</span>
      </p>
      <p>
        <span>Order total:</span>
        <span>{formatPrice(Order.total)}</span>
      </p>
      <p>
        <span>Order items:</span>
        <span>{Order.items.length}</span>
      </p>
      <div className="items">
        {Order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img
              src={item.photo.image.publicUrlTransformed}
              alt={item.photo.altText}
            />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {formatPrice(item.price)}</p>
              <p>Sub total: {formatPrice(item.price * item.quantity)}</p>
              <p>Description: {item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}

OrderPage.propTypes = {
  query: PropTypes.object,
};
