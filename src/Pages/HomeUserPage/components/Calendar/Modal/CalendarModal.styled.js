import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CalendarModalStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  position: absolute;
  bottom: 54px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 13px;
  transform-origin: bottom;
  z-index: 2;

  @media screen and (max-width: 767px) {
    left: ${props => -7 - props.$deltaNum}px;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    right: ${props => (props.$delta ? '17px' : '')};
    left: ${props => (props.$delta ? '' : '17px')};
    padding: 24px 16px;
    width: 292px;
    bottom: 58px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 56px;
  }

  h3 {
    color: ${({ theme }) => theme.primaryBlue};
    font-size: 16px;
    line-height: calc(20 / 16);
  }
  p {
    color: ${({ theme }) => theme.primaryBlack};
    font-size: 16px;
    line-height: calc(20 / 16);
    span {
      color: ${({ theme }) => theme.primaryBlue};
      font-size: 18px;
      font-weight: 500;
      line-height: calc(24 / 18);
    }
  }
`;
