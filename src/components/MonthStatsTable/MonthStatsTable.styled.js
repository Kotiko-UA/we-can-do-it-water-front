import styled from 'styled-components';

import leftArrImg from '../../icons/left_arr.svg';
import rightArrImg from '../../icons/right_arr.svg';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 8px 0px;
  outline: 1px solid tomato;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  outline: 1px solid tomato;
  gap: 66px;
`;

export const Title = styled.h3`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  outline: 1px solid tomato;
`;
export const MonthToggle = styled.div`
  width: 100%;
  gap: 12px;
  outline: 1px solid tomato;
`;

export const LeftButton = styled.button`
  width: 14px;
  height: 14px;
  outline: 1px solid tomato;
`;

export const RightButton = styled.button`
  width: 14px;
  height: 14px;
  margin-right: 12px;
  outline: 1px solid tomato;
`;

export const NameOfMonth = styled.span`
  width: 100%;
  outline: 1px solid tomato;
`;

export const LeftArrImg = styled.div`
  width: 100%;
  height: 100%;
  /* margin-right: 12px; */
  background-image: url(${leftArrImg});
  background-size: cover;
  outline: 1px solid tomato;
`;

export const RightArrImg = styled.div`
  width: 100%;
  height: 100%;
  /* margin-right: 12px; */
  background-image: url(${rightArrImg});
  background-size: cover;
  outline: 1px solid tomato;
`;

export const Calendar = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  outline: 1px solid tomato;
`;

export const Day = styled.li`
  width: 32px;
  outline: 1px solid tomato;
`;
export const Date = styled.p`
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--Secondary-color-5, #ff9d43);
  background: var(--Primery-Color-White, #fff);
  display: flex;
  padding: 7px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  outline: 1px solid tomato;
`;
export const Progress = styled.p`
  width: 100%;
  color: var(--Secondary-color-4, #9ebbff);
  text-align: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */

  outline: 1px solid tomato;
`;
