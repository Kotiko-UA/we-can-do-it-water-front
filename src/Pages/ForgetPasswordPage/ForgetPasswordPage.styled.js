import styled from 'styled-components';
import bcgSignInFrameMob from '../../icons/SignInFrameMob.svg';
import bcgSignInFrameTab from '../../icons/SignInFrameTab.svg';
import bcgSignInFrameDesk from '../../icons/SignInFrameDesk.svg';
import bcgSignInBottleTab from '../../icons/SignInBottleTab.svg';
import bcgSignInBottleMob from '../../icons/SignInBotleMob.svg';
import bcgSignInBottleDesk from '../../icons/SignInBottleTab.svg';

export const Section = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 95px;

  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${bcgSignInFrameMob}), url(${bcgSignInBottleMob});
  background-position: bottom;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 300px;
    flex-direction: row;
    display: flex;
    background-image: url(${bcgSignInFrameTab}), url(${bcgSignInBottleTab});
    background-position: right;
  }

  @media (min-width: 1440px) {
    background-image: url(${bcgSignInFrameDesk}), url(${bcgSignInBottleDesk});
    background-position: left;
    padding-top: 20px;
    padding-bottom: 40px;
  }
`;
export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 704px;
    padding-left: 32px;
    padding-right: 400px;
    margin-right: auto;
    margin-left: auto;

    justify-content: flex-start;
    align-items: flex-start;
  }
  @media (min-width: 1439px) {
    padding-left: 840px;
    padding-right: 216px;
    width: 1216px;
  }
`;

export const Title = styled.h1`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 50px;
  }
  @media (min-width: 1440px) {
    margin-top: 142px;
    width: 384px;
  }
`;
