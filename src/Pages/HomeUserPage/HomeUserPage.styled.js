import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 112px;
  }
`;

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 1439px) {
    padding-bottom: 40px;
  }

  @media only screen and (min-width: 768px) {
    gap: 40px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;
