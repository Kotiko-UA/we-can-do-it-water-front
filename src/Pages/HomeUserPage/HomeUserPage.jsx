import { Container, WrapperHomePage } from './HomeUserPage.styled';

import { MyDailyNorma } from './components/MyDailyNorma/MyDailyNorma';
import Calendar from './components/Calendar/Calendar';
import { useState } from 'react';

const HomeUserPage = () => {
  const [dailyNormaModal, setDailyNormaModal] = useState(false);
  const [addWaterModal, setAddWaterModal] = useState(false);
  const [correctWaterModal, setCorrectWaterModal] = useState(false);
  const [delWaterModal, setDelWaterModal] = useState(false);
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
