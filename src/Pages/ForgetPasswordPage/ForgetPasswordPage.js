import { ForgetPassword } from 'components/ForgetPassword/ForgetPaswword';
import { Container, Title, Section } from './ForgetPasswordPage.styled';

const ForgetPasswordPage = () => {
  return (
    <Section>
      <Container>
        <Title>Forgot Password</Title>
        <ForgetPassword />
      </Container>
    </Section>
  );
};

export default ForgetPasswordPage;
