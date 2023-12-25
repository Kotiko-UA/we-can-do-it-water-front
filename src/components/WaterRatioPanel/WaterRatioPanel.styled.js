import styled from 'styled-components';

import bgimg from '../../icons/bottle_home_screen1.svg';

export const Wrapper = styled.div`
  width: 100%;
  outline: 1px solid tomato;
`;

export const TitlePic = styled.div`
  width: 280px;
  height: 208px;
  flex-shrink: 0;
  background-image: url(${bgimg});
  background-size: cover;
`;

export const Title = styled.span`
  width: 52px;
  color: #407bff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const Progress = styled.span`
  width: 208px;
  height: 82px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  outline: 1px solid tomato;
`;

export const Scale = styled.ul`
  width: 100%;
  outline: 1px solid tomato;
  display: flex;
  justify-content: space-between;
  color: var(--Primery-Color-Blue, #407bff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;

export const Button = styled.ul`
  width: 100%;
  display: inline-flex;
  padding: 6px 76px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: var(--Primery-Color-White, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
