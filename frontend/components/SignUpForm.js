import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../lib/useCurrentUser';

export const SIGNUP_USER_MUTATION = gql`
  mutation SIGNUP_USER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;

export default function SignUpForm() {
  const { inputs, handleInputChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { data, error }] = useMutation(SIGNUP_USER_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await signup();

    resetForm();
  }

  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <Error error={error} />
        <fieldset>
          {data?.createUser && (
            <p>
              You've successfully created your account: {data?.createUser.email}
              . Please sign in to your account
            </p>
          )}
          <h2>Sign up for your account</h2>
          <label htmlFor="name2">
            Name
            <input
              id="name2"
              name="name"
              type="text"
              autoComplete="name"
              value={inputs.name}
              placeholder="Enter your name"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label htmlFor="email2">
            Email
            <input
              id="email2"
              name="email"
              type="email"
              value={inputs.email}
              placeholder="Enter your email"
              onChange={(e) => handleInputChange(e)}
            />
          </label>

          <label htmlFor="password2">
            Password
            <input
              id="password2"
              name="password"
              type="password"
              value={inputs.password}
              placeholder="Enter your password"
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <button type="submit">Sign up</button>
        </fieldset>
      </Form>
    </>
  );
}
