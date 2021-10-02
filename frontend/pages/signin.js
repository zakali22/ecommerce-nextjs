import styled from 'styled-components';
import SignInForm from '../components/SignInForm.tsx';
import SignUpForm from '../components/SignUpForm.tsx';
import RequestResetForm from '../components/RequestResetForm.tsx';

const AuthFormStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  & > * {
    flex: 1 0 auto;
    width: calc(50% - 30px);
    max-width: calc(50% - 30px);
    margin-bottom: 30px;

    &:nth-child(odd) {
      margin-right: 30px;
    }
  }
`;

export default function SigninPage() {
  return (
    <AuthFormStyle>
      <SignInForm />
      <SignUpForm />
      <RequestResetForm />
    </AuthFormStyle>
  );
}
