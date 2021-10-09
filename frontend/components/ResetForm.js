import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function ResetForm({ token }) {
  const { inputs, handleInputChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [resetPassword, { data, loading, error }] = useMutation(
    RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  const [passwordLengthErr, setPasswordLengthErr] = useState(null);
  const [successfulErrResult, setSuccessfulErrResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (inputs.password.length >= 8) {
      const res = await resetPassword();
      const successfulErr = res.data?.redeemUserPasswordResetToken?.code
        ? res.data?.redeemUserPasswordResetToken
        : undefined;

      if (successfulErr === undefined) {
        resetForm();

        setTimeout(() => {
          Router.push({
            pathname: '/signin',
          });
        }, 500);
      } else {
        setSuccessfulErrResult(successfulErr);
      }

      console.log(res);
    } else {
      setPasswordLengthErr({
        message: 'Password length must be 8 characters or more',
      });
    }
  }

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <fieldset aria-busy={loading}>
          <Error error={error || successfulErrResult || passwordLengthErr} />
          {data?.redeemUserPasswordResetToken === null && (
            <p>Password reset successfully. Please signin</p>
          )}
          <h2>Reset your password</h2>
          <label htmlFor="email4">
            Email
            <input
              id="email4"
              name="email"
              type="email"
              value={inputs.email}
              placeholder="Enter your email"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label htmlFor="password4">
            Password
            <input
              id="passwor4"
              name="password"
              type="password"
              value={inputs.password}
              placeholder="Enter your password"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <button type="submit">Reset your password</button>
        </fieldset>
      </Form>
    </>
  );
}

ResetForm.propTypes = {
  token: PropTypes.string,
};
