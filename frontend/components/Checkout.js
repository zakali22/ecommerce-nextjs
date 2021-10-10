/* eslint-disable no-useless-return */
import { useMutation } from '@apollo/client';
import {
  CardElement,
  Elements,
  ElementsConsumer,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import gql from 'graphql-tag';
import nProgress from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from '../lib/useCurrentUser';
import SickButton from './styles/SickButton';
import { useCart } from '../lib/cartState';

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CheckoutStyles = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;

  & > *:first-child {
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }
`;

const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

function CheckoutForm({ stripe, elements }) {
  const [error, setError] = useState();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  //   const stripe = useStripe();
  //   const elements = useElements();
  const [checkout, { error: graphQlErrors }] = useMutation(CHECKOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const { closeCart, cartOpen } = useCart();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    nProgress.start();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error);
      setIsLoading(false);
      nProgress.done();
      return;
    }

    console.log(paymentMethod);

    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });

    console.log(order);

    closeCart();
    router.push({
      pathname: `/order/${order.data.checkout.id}`,
    });
  }

  return (
    <CheckoutStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQlErrors && <p style={{ fontSize: 12 }}>{graphQlErrors.message}</p>}
      <CardElement />
      <SickButton type="submit" disabled={!stripe}>
        Checkout
      </SickButton>
    </CheckoutStyles>
  );
}

CheckoutForm.propTypes = {
  elements: PropTypes.any,
  stripe: PropTypes.any,
};

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
          <CheckoutForm elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
    </Elements>
  );
}
