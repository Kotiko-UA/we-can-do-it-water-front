import styled from 'styled-components';
import bcgSignUpFrameMob from "../../icons/SignUpFrameMob.svg";
import bcgSignUpBottle from "../../icons/SignUpBottleMob.svg";
import bcgSignUpFrameTab from "../../icons/SignUpFrameTab.svg";
import bcgSignUpBottleTab from "../../icons/SignUpBottleTab.svg";
import bcgSignUpFrameDesk from "../../icons/SignUpFrameDesk.svg";
import bcgSignUpBottleDesk from "../../icons/SignUpBottleDesk.svg";

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
  padding-bottom: 250px;
  flex-direction: column;
  
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url(${bcgSignUpFrameMob}), url(${bcgSignUpBottle});
  background-position: bottom;

  
  @media (min-width: 768px) {
  padding-top:40px;
  padding-bottom:300px;
  flex-direction: row;
  display: flex;
  background-image: url(${bcgSignUpFrameTab}), url(${bcgSignUpBottleTab});
  background-position: right;
  }

  @media (min-width: 1440px) {
   background-image: url(${bcgSignUpFrameDesk}), url(${bcgSignUpBottleDesk}); 
   background-position: left;
   padding-top: 0px;
   padding-bottom: 0px;
  }
  `;


export const SignUpContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;


  @media (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    width: 336px;
    height: auto;
    margin-left: 0px;
    margin-right: 400px;
  };
  
   @media (min-width: 1440px) {
    width: 384px;
    height: auto;
    margin-top: 140px;
    margin-bottom: 196px;
    margin-left: auto;
    margin-right: 198px;
    align-items: center;
  }
  `

