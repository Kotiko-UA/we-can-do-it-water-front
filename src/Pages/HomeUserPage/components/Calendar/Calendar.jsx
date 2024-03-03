import React from 'react';
import Today from './Today/Today';
import Month from './Month/Month';
import { CalendarWrap } from './Calendar.styled';

const Calendar = ({ onDeleteWater, onEditingWater, onAddWater }) => {
  return (
    <CalendarWrap>
      <Today
        onDeleteWater={onDeleteWater}
        onEditingWater={onEditingWater}
        onAddWater={onAddWater}
      />
      <Month />
    </CalendarWrap>
  );
};

export default Calendar;
