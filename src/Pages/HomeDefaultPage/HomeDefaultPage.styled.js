import styled from 'styled-components';
import { ReactComponent as CalendarSvg } from '../../icons/calendarss.svg';
import { ReactComponent as PresentationSvg } from '../../icons/presentation.svg';
import { ReactComponent as ScrewSvg } from '../../icons/screw.svg';
import backgroundMainPageMobile from '../../icons/backgroundMainPageMobile.svg';
import backgroundMainPageTablet from '../../icons/NewTablet.svg';

import backgroundMainPageDesc from '../../icons/backgroundMainPageDesc.svg';

import { ReactComponent as PointSvg } from '../../icons/mark-list.svg';

export const Container = styled.div`
  /* min-width: 768px; */

  /* margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px; */

  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    padding-left: 112px;
    padding-right: 112px;
    display: flex;
    flex-direction: row;
    gap: 81px;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const HomeSection = styled.section`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  background-size: 100%;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-image: url(${backgroundMainPageMobile});

  @media (min-width: 768px) {
    background-image: url(${backgroundMainPageTablet});
    background-size: cover;
    margin-top: 26px;
    padding-bottom: 60px;
  }

  @media (min-width: 1440px) {
    background-image: url(${backgroundMainPageDesc});
    height: 693px;
    margin-top: 49px;
    padding-top: 31px;
  }
`;

export const BenefitsContainer = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1440px) {
    width: 439px;
    margin-left: 0;
    margin-right: 0;
  }
`;
export const Heading = styled.h1`
  color: ${props => props.theme.primaryBlack};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Paragraph = styled.h1`
  color: ${props => props.theme.primaryBlack};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export const ListTitle = styled.p`
  color: ${props => props.theme.primaryBlack};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;

  @media (min-width: 1440px) {
    /* padding-top: 31px; */
  }
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Calendar = styled(CalendarSvg)`
  width: 40px;
  height: 40px;
`;

export const Presentation = styled(PresentationSvg)`
  width: 40px;
  height: 40px;
`;

export const Screw = styled(ScrewSvg)`
  width: 40px;
  height: 40px;
`;

export const Point = styled(PointSvg)`
  /* width: 24px;
  height: 24px; */
`;

export const Text = styled.p`
  color: ${props => props.theme.primaryBlack};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const Button = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 280px;
  height: 36px;

  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: ${props => props.theme.primaryWhite};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  margin-top: 24px;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const ArgumentsContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 12px;
  height: 368px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  height: 416px;

  border-radius: 10px;
  background: ${props => props.theme.secondaryGrey};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    padding: 32px 0 32px 24px;
    width: 494px;
    height: 332px;
    margin-left: 0;
    margin-right: 0;
  }
`;
