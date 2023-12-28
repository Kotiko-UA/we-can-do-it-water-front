import { ForgetPassword } from 'components/ForgetPassword/ForgetPaswword';
import { Container, Title, Bootle } from './ForgetPasswordPage.styled';

const ForgetPasswordPage = () => {
  return (
    <Container>
      <Title>Forgot Password</Title>
      <ForgetPassword />
      <Bootle />
    </Container>
  );
};

export default ForgetPasswordPage;
