import styled from 'styled-components';
//import { div, h1 } from 'react-router-dom';
import bcgSignUpBottleMob from "../../icons/SignUpBottleMob.svg";
import bcgSignUpBottleTab from "../../icons/SignUpBottleTab.svg";
import bcgSignUpBottleDesk from "../../icons/SignUpBottleDesk.svg";

export const BcgBottleSection = styled.div`
width: 100%;
padding: 200px 20px 20px;
background-repeat: no-repeat;
background-image: url(${bcgSignUpBottleMob});
background-position: center;
  

 @media (min-width: 768px) {
background-image: url(${bcgSignUpBottleTab});
  }  
  
@media (min-width: 1440px) {
background-image: url(${bcgSignUpBottleDesk});
  }

  `;