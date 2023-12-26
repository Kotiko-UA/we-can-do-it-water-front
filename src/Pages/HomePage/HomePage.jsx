import { Container, WrapperHomePage } from './HomePage.styled';

import { MyDailyNorma } from './components/MyDailyNorma/MyDailyNorma';
import Calendar from './components/Calendar/Calendar';

const HomePage = () => {
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

export default HomePage;
