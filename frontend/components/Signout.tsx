import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { useEffect } from 'react';
import { CURRENT_USER_QUERY } from '../lib/useCurrentUser';

const SIGNOUT_USER_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function Signout() {
  const [signout, { data, error }] = useMutation(SIGNOUT_USER_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  console.log(data);

  async function signoutUser() {
    await signout();
    Router.push({
      pathname: '/',
    });
  }

  useEffect(() => {
    signoutUser();
  }, []);

  return data?.endSession || false;
}
