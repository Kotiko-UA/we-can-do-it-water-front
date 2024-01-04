import { Container, WrapperHomePage } from './HomeUserPage.styled';

import Calendar from './components/Calendar/Calendar';
import { useState } from 'react';
import { DailyNormaModal } from 'components/DailyNormaModal/DailyNormaModal';
import { DailyNorma } from './components/MyDailyNorma/DailyNorma/DailyNorma';

const HomeUserPage = () => {
  const [dailyNormaModal, setDailyNormaModal] = useState(false);
  // const [addWaterModal, setAddWaterModal] = useState(false);
  // const [correctWaterModal, setCorrectWaterModal] = useState(false);
  // const [delWaterModal, setDelWaterModal] = useState(false);
  const onClick = modal => {
    switch (modal) {
      case 'edit-daily-norm':
        setDailyNormaModal(!dailyNormaModal);
        return;

      default:
        return;
    }
  };
  return (
    <Container>
      <WrapperHomePage>
        <DailyNorma onClick={onClick} />
        <Calendar />
      </WrapperHomePage>
      {dailyNormaModal && <DailyNormaModal onClick={onClick} />}
    </Container>
  );
};

export default HomeUserPage;
