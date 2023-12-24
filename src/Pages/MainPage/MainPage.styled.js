import styled from 'styled-components';
import { ReactComponent as CalendarSvg } from '../../icons/calendarss.svg';
import { ReactComponent as PresentationSvg } from '../../icons/presentation.svg';
import { ReactComponent as ScrewSvg } from '../../icons/screw.svg';

export const Container = styled.div`
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Heading = styled.h1`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Paragraph = styled.h1`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 24px;
`;

export const ListTitle = styled.p`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
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
  width: 24px;
  height: 24px;
`;

export const Presentation = styled(PresentationSvg)`
  width: 24px;
  height: 24px;
`;

export const Screw = styled(ScrewSvg)`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
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
  background: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ArgumentsContainer = styled.div`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
`;
