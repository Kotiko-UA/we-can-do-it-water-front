import React from 'react';
import Today from './Today/Today';
import Month from './Month/Month';
import { CalendarWrap } from './Calendar.styled';

const Calendar = () => {
  return (
    <CalendarWrap>
      <Today />
      <Month />
    </CalendarWrap>
  );
};

export default Calendar;
