import styled from 'styled-components';

export const BodyModal = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 10px;
  background: #fff;
  width: 256px;
  height: 220px;
  @media (min-width: 768px) {
    width: 544px;
    height: 144px;
    align-items: end;
    padding: 0px;
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
    height: 44px;
    padding: 10px 30px;
    margin-bottom: 0px;
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
    height: 44px;
    padding: 10px 30px;
  }
`;
export const Titel = styled.p`
  color: #2f2f2f;

  font-family: 'Roboto';
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
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: 'Roboto';
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
  font-family: 'Roboto';
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
  font-family: 'Roboto';
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media (min-width: 768px) {
    justify-content: end;
  }
`;
