import { useState, useEffect, useRef } from 'react';

import Icons from '../../../../../icons/HomePage/sprite.svg';
import { Months } from '../../../../../FetchExamples/Calendar.js';



import {
  ArrowButton,
  CalendarContainer,
  DaysContainer,
  MonthNavigation,
  MonthControl,
  Month,
} from './Month.styled';
import DayComponent from './DayComponent/DayComponent';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
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
      const waterPercentage = Months?.find(item => {
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
            {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
              currentDate
            )}
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
