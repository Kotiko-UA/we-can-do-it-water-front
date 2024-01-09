import styled from 'styled-components';
import bcgSignInFrameMob from '../../icons/SignInFrameMob.svg';
import bcgSignInFrameTab from '../../icons/SignInFrameTab.svg';
import bcgSignInFrameDesk from '../../icons/SignInFrameDesk.svg';
import bcgSignInBottleTab from '../../icons/SignInBottleTab.svg';
import bcgSignInBottleMob from '../../icons/SignInBotleMob.svg';
import bcgSignInBottleDesk from '../../icons/SignInBottleTab.svg';

export const Title = styled.h1`
  color: ${props => props.theme.primaryBlack};
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const SignInSection = styled.section`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 250px;
  flex-direction: column;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${bcgSignInFrameMob}), url(${bcgSignInBottleMob});
  background-position: bottom;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 300px;
    flex-direction: row;
    display: flex;
    background-image: url(${bcgSignInFrameTab}), url(${bcgSignInBottleTab});
    background-position: right;
  }

  @media (min-width: 1440px) {
    background-image: url(${bcgSignInFrameDesk}), url(${bcgSignInBottleDesk});
    background-position: left;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const SignInContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    width: 336px;
    height: auto;
    margin-left: 0px;
    margin-right: 400px;
    align-items: flex-start;
  }

  @media (min-width: 1440px) {
    width: 384px;
    height: auto;
    margin-top: 140px;
    margin-bottom: 196px;
    margin-left: auto;
    margin-right: 198px;
  }
`;
