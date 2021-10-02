import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { useState } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../lib/useCurrentUser';

export const SIGNIN_USER_MUTATION = gql`
  mutation SIGNIN_USER_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignInForm() {
  const { inputs, handleInputChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signin, { data }] = useMutation(SIGNIN_USER_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const [error, setError] = useState(undefined);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signin();
    const error =
      res.data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure'
        ? res.data?.authenticateUserWithPassword
        : undefined;

    setError(error);

    if (error === undefined) {
      resetForm();
      Router.push({
        pathname: '/',
      });
    }
  }

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset>
          <Error error={error} />
          <h2>Sign in to your account</h2>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              value={inputs.email}
              placeholder="Enter your email"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={inputs.password}
              placeholder="Enter your password"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <button type="submit">Sign in</button>
        </fieldset>
      </Form>
    </>
  );
}
