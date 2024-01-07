import styled from 'styled-components';

export const BodyModal = styled.div`
  display: inline-flex;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: #fff;
  width: 280px;
  height: 280px;
  @media (min-width: 768px) {
    width: 592px;
    height: 208px;
    align-items: end;
  }
`;

export const ButDelete = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary-color-3, #ef5050);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;
export const ButCancel = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--Secondary-color-5, #d7e3ff);
  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;
export const Titel = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  @media (min-width: 768px) {
    width: 384px;
  }
`;
export const Text = styled.p`
  color: #2f2f2f;

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const Del = styled.span`
  color: #fff;
  width: 172px;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;
export const Can = styled.span`
  color: var(--Primery-Color-Blue, #407bff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 172px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;
export const Wrap = styled.span`
  display: flex;
  gap: 62px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 136px;
  }
`;
export const ButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 24px;
  }
`;
