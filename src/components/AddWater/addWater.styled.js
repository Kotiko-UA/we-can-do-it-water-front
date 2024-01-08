import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import { ReactComponent as Minus } from '../../icons/minus-small.svg';
import { ReactComponent as Plus } from '../../icons/plus-small.svg';

export const BodyModal = styled.div`
  gap: 24px;
  border-radius: 10px;
  background: #fff;
  width: 256px;
  height: 492px;
  margin: auto;
  @media (min-width: 768px) {
    width: 656px;
    height: 440px;
  }
  @media (min-width: 1440px) {
    width: 544px;
  }
`;

export const TilelAddWater = styled.p`
  color: #2f2f2f;
  width: 128px;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  @media (min-width: 768px) {
    width: 180px;
  }
`;
export const WraperTitel = styled.div`
  display: flex;
  align-items: center;
  gap: 104px;
  @media (min-width: 768px) {
    gap: 452px;
  }
  @media (min-width: 1440px) {
    gap: 340px;
  }
`;

export const ChoWal = styled.p`
  color: #2f2f2f;
  margin-top: 24px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const AmoWate = styled.p`
  color: #2f2f2f;
  margin-top: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const Time = styled.p`
  color: #2f2f2f;
  margin-top: 24px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const ValueWater = styled.p`
  color: #2f2f2f;
  margin-top: 24px;
  margin-bottom: 16px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const WaterMl = styled.div`
  color: #407bff;

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
export const WaterMlBeg = styled.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 92px;
  height: 36px;
  border-radius: 40px;
  background: #d7e3ff;
  color: #407bff;

  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
export const ButMinus = styled(Minus)``;
export const ButValue = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  border-radius: 30px;
  border: 1px solid #9ebbff;

  background: #fff;

  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
`;
export const ButPlus = styled(Plus)``;
export const WrapValue = styled.div`
  display: flex;
  height: 44px;
  gap: 7px;
  margin-top: 12px;
  align-items: center;
`;
export const ButSave = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 16px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
    margin-top: 0px;
  }
`;
export const StyledInput = styled.input`
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  width: 120px;
  color: #407bff;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 768px) {
    width: 656px;
  }
  @media (min-width: 1440px) {
    width: 554px;
  }
`;
export const StyledDatePicker = styled.input`
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  width: 120px;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-top: 12px;
  @media (min-width: 768px) {
    width: 656px;
  }
  @media (min-width: 1440px) {
    width: 554px;
  }
`;
export const StileSave = styled.span`
  color: #fff;
  width: 196px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: 100px;
  }
`;
export const WrapSave = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: end;
    gap: 24px;
    margin-top: 24px;
    align-items: center;
  }
`;
