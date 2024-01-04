import styled from 'styled-components';

export const OverLay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const ButtonClose = styled.button`
  padding: 0;
  background: initial;
`;
export const TitleModal = styled.h1`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;

  @media (min-width: 768px) {
  }
`;
export const Modal = styled.div`
  padding: 24px 12px;
  position: absolute;
  width: 280px;
  background-color: #ffffff;
  border-radius: 10px;
  @media (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 592px;
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const ButtonSave = styled.button`
  width: 100%;
  color: #ffffff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 8px 30px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
    position: relative;
    top: 75%;
    left: 75%;
  }
  @media (min-width: 1440px) {
    top: 71.5%;
    left: 70.5%;
  }
`;
