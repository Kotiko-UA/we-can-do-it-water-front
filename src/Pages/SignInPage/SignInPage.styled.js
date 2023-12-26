import styled from 'styled-components';
//import { div, h1 } from 'react-router-dom';
import bcgSignInBottleMob from "../../icons/SignInBotleMob.svg";
import bcgSignInBottleTab from "../../icons/SignInBottleTab.svg";
import bcgSignInBottleDesk from "../../icons/SignInBottleDesk.svg";
import bcgSignInFrameMob from "../../icons/SignInFrameMob.svg";
import bcgSignInFrameTab from "../../icons/SignInFrameTab.svg";
import bcgSignInFrameDesk from "../../icons/SignInFrameDesk.svg";

/*
export const bcgSignInBottleMob = styled(bcgSignInBottleMobSvg)`
  width: 16px;
  height: 16px;
  position: relative; 
  bottom: 30px;
  left: 180px;
  vertical-align: middle; 
  cursor: pointer;
`;*/


export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;


@media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
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
color: #2F2F2F;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 32px;
`;

export const SignInSection = styled.section`
  width: 100%;
  //padding-top: 20px;
  //padding-bottom: 40px;
  flex-direction: column;


  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-image: url(${bcgSignInFrameMob}), url(${bcgSignInBottleMob});

  display: inline-flex;
padding-bottom: 2.302px;
flex-direction: column;
justify-content: center;
align-items: center;
  `;