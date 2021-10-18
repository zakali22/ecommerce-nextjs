import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { useState } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      message
    }
  }
`;

export default function RequestResetForm() {
  const { inputs, handleInputChange, resetForm } = useForm({
    email: '',
  });

  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await requestReset();

    console.log(res);
  }

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset aria-busy={loading}>
          <Error error={error} />
          {data?.sendUserPasswordResetLink === null && (
            <p>Password reset link sent. Please check your email</p>
          )}
          <h2>Request a password reset</h2>
          <label htmlFor="email3">
            Email
            <input
              id="email3"
              name="email"
              type="email"
              value={inputs.email}
              placeholder="Enter your email"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <button type="submit">Request reset</button>
        </fieldset>
      </Form>
    </>
  );
}
