import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';
import { Wrapper } from './HomePage.styled';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';

// import { fetchContacts } from 'Redux/contacts/operations';

// import css from './Contacts.module.css';
// import { Filter } from 'components/Filter/Filter';

export default function HomePage() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Wrapper>
      <HelmetProvider>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
      </HelmetProvider>
      <DailyNorma />
      <WaterRatioPanel />
      <TodayWaterList />
      <MonthStatsTable />
    </Wrapper>
  );
}
