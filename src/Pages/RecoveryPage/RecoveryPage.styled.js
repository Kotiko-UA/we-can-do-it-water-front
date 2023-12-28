import styled from 'styled-components';
import { ReactComponent as SingUpSVG } from '../../icons/SingUp mobile.svg';
import backdroundimage from '../../icons/backgroundFoffotmobile.svg';
import backgroundimageTablet from '../../icons/backgroundFoggotTablet.svg';

export const Bootle = styled(SingUpSVG)`
  width: 280px;
  height: 210px;
  position: relative;
  top: 50%;
  left: 0%;

  @media (min-width: 768px) {
    width: 736px;
    height: 548px;
    position: relative;
    bottom: 400px;
    left: 200px;
  }
`;
export const Container = styled.div`
  /* min-width: 768px; */

  /* margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px; */
  outline: 1px solid red;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${backdroundimage});
  background-size: cover;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-left: 0px;
    background-image: url(${backgroundimageTablet});
    background-size: cover;
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

export const Title = styled.h1`
  color: #2f2f2f;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    text-shadow: none;
    text-align: left;
    margin-top: 40px;
  }
`;
