import styled from 'styled-components';
export const DailyNormaContainer = styled.div`
  display: inline-block;
  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.secondaryGrey};

  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);

  padding: 8px 20px;
  margin-bottom: 8px;

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 30px;
    left: 0;
  }
`;
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin-bottom: 12px;
`;

export const Norma = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;

  color: ${({ theme }) => theme.primaryBlue};

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const NormaContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const HoverBtnStyled = styled.button`
  transition: color ${({ theme }) => theme.cubicBezier};

  position: relative;
  &:hover {
    color: ${({ theme }) => theme.secondaryOrange};
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;

    background-color: ${({ theme }) => theme.secondaryOrange};

    transition: width 0.3s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.primaryWhite};

  width: 100%;
  padding: 8px 30px;

  outline: none;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.primaryBlue};

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all ${({ theme }) => theme.cubicBezier};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.secondaryBlue};

    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    width: ${props => props.$width || '100%'};
    margin-left: ${props => props.$marginLeft || ''};
    margin-right: ${props => props.$marginRight || ''};
    font-size: 18px;
    line-height: calc(24 / 18);
    padding: 10px 30px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: none;

    stroke: ${({ theme }) => theme.primaryWhite};
  }
`;

export const NormaBtn = styled(HoverBtnStyled)`
  font-size: 16px;
  line-height: calc(20 / 16);
  background-color: transparent;

  color: ${({ theme }) => theme.secondaryBlue};
`;

export const Container = styled.div`
  position: relative;

  width: 100%;
  img {
    margin: 0 auto;
    margin-bottom: 16px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 50%;
    img {
      height: 548px;
      object-fit: cover;
    }
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  button {
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    @media screen and (min-width: 768px) {
      width: 336px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media screen and (min-width: 1440px) {
      width: 178px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
  @media screen and (min-width: 1440px) {
    gap: 23px;
  }
`;

export const WaterStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  p {
    color: ${({ theme }) => theme.primaryBlue};

    font-weight: 400;
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 768px) {
    width: 356px;
  }
  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;

export const WaterMeter = styled.div`
  position: relative;
  height: 8px;

  background-color: ${({ theme }) => theme.secondaryLightBlue};

  width: calc(100% - 31px);
  padding: 0 20px 0 11px;
  border-radius: 10px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${props => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.primaryWhite};

    border: 1px solid ${({ theme }) => theme.primaryBlue};

    border-radius: 100%;
  }
  div {
    position: absolute;
    border-radius: 10px;

    top: 0;
    left: 0;

    width: ${props => {
      if (props.$filled > 100) {
        return '100%';
      }
      return props.$filled + '%';
    }};
    height: 100%;

    background-color: ${({ theme }) => theme.secondaryBlue};
  }
`;

export const WaterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  span {
    color: ${({ theme }) => theme.primaryBlue};

    font-size: 12px;

    line-height: calc(16 / 12);
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 1px;
      height: 8px;

      background-color: ${({ theme }) => theme.secondaryLightBlue};

      position: absolute;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
    &:first-child {
      margin-left: 11px;
    }
    &:nth-child(2) {
      font-size: 16px;

      line-height: calc(20 / 16);
      font-weight: 500;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
