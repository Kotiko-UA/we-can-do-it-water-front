import styled from 'styled-components';
import bcgSignUpFrameMob from "../../icons/SignUpFrameMob.svg";
//import bcgSignInFrameTab from "../../icons/SignInFrameTab.svg";
//import bcgSignInFrameDesk from "../../icons/SignInFrameDesk.svg";

export const Title = styled.h1`
color: #2F2F2F;
font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 32px;
`

export const SignUpSection = styled.section`
  width: 100%;
  padding-top: 24px;
  flex-direction: column;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${bcgSignUpFrameMob});
  background-position: center;

  
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


export const SignUpContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  ;
  `

