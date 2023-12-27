import { Container, WrapperHomePage } from './HomeUserPage.styled';

import { MyDailyNorma } from './components/MyDailyNorma/MyDailyNorma';
import Calendar from './components/Calendar/Calendar';

const HomeUserPage = () => {
  return (
    <Container>
      <WrapperHomePage>
        {/* {isLoading && <Loader />} */}
        <MyDailyNorma />
        <Calendar />
      </WrapperHomePage>
    </Container>
  );
};

export default HomeUserPage;
