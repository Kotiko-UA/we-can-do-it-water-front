import { RecoveryPassword } from 'components/RecoveryPassword/RecoveryPassword';
import { Container, Title, Bootle } from './RecoveryPage.styled';

const RecoveryPasswordPage = () => {
  return (
    <Container>
      <Title>Recovery Password</Title>
      <RecoveryPassword />
      <Bootle />
    </Container>
  );
};

export default RecoveryPasswordPage;
