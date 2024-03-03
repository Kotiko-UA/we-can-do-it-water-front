import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { SignUpContainer, Title, SignUpSection } from './SignUpPage.styled.js';

export default function SignUpPage() {
  return (
    <SignUpSection>
      <SignUpContainer>
        <Title>Sign Up</Title>
        <SignUpForm />
      </SignUpContainer>
    </SignUpSection>
  );
}
