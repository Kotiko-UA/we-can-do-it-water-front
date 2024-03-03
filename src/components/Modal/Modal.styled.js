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
  z-index: 999;
  padding: 40px 0;
`;
export const ButtonClose = styled.button`
  display: block;
  position: absolute;
  top: 28px;
  right: 12px;
  padding: 0;
  background: initial;
  @media (min-width: 768px) {
    top: 36px;
    right: 24px;
  }
`;

export const Modal = styled.div`
  padding: 24px 12px;
  position: relative;
  max-width: 1008px;
  background-color: #ffffff;
  border-radius: 10px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    padding: 32px 24px;
  }
  overflow-y: auto;
  min-width: 290px;
  max-height: 100%;
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
