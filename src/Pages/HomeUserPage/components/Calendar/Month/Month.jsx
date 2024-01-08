import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { selectDailyNorma, selectToken } from 'components/redux/auth/selectors';
import Icons from '../../../../../icons/HomePage/sprite.svg';

import {
  ArrowButton,
  CalendarContainer,
  DaysContainer,
  MonthNavigation,
  MonthControl,
  Month,
} from './Month.styled';
import DayComponent from './DayComponent/DayComponent';
import { useSelector } from 'react-redux';
import { selectWaterNotes } from 'components/redux/water/selectors';

const instanceWaterMonth = axios.create();
instanceWaterMonth.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthData, setMonthData] = useState([]);
  const token = useSelector(selectToken);

   const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const dailyNormaValue = useSelector(selectDailyNorma);
  const waterNotes = useSelector(selectWaterNotes);
  
  useEffect(() => {
    const getMonthData = async () => {
      try {
        const resp = await instanceWaterMonth.get(
          `/waternotes/month?month=${month}&year=${year}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const monthDataResp = resp.data;
        setMonthData(monthDataResp);
      } catch (error) {
        console.error(error);
      }
    };

    getMonthData();
  }, [token, month, year, dailyNormaValue, waterNotes]);


  const ref = useRef(null);

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = () => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
  };

  const renderDays = () => {
    const daysInMonth = getDaysInMonth();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return days.map(day => {
      const waterPercentage = monthData?.find(item => {
        return Number(item.date.split(',')[0]) === day;
      });

      return (
        <DayComponent
          calendarRef={ref}
          key={day}
          day={day}
          waterPercentage={waterPercentage}
        />
      );
    });
  };

  return (
    <CalendarContainer className="calendar" ref={ref}>
      <MonthNavigation>
        <h2>Month</h2>
        <MonthControl>
          <ArrowButton aria-label="Previous month" onClick={handlePrevMonth}>
            <svg width="14" height="14">
              <use href={Icons + '#arrow-left'}></use>
            </svg>
          </ArrowButton>
          <Month>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              year: 'numeric',
            }).format(currentDate)}
          </Month>
          <ArrowButton aria-label="Previous month" onClick={handleNextMonth}>
            <svg width="14" height="14">
              <use href={Icons + '#arrow-right'}></use>
            </svg>
          </ArrowButton>
        </MonthControl>
      </MonthNavigation>
      <DaysContainer>{renderDays()}</DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
