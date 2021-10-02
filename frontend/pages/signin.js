import styled from 'styled-components';
import SignInForm from '../components/SignInForm.tsx';
import SignUpForm from '../components/SignUpForm.tsx';

const AuthFormStyle = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  & > * {
    flex: 1 0 auto;
    width: 50%;
    max-width: 50%;

    &:first-child {
      margin-right: 30px;
    }
  }
`;

export default function SigninPage() {
  return (
    <AuthFormStyle>
      <SignInForm />
      <SignUpForm />
    </AuthFormStyle>
  );
}
