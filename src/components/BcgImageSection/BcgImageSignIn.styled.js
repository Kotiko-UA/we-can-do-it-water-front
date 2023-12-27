import styled from 'styled-components';
import bcgSignInBottleMob from "../../icons/SignInBotleMob.svg";
import bcgSignInBottleTab from "../../icons/SignInBottleTab.svg";
import bcgSignInBottleDesk from "../../icons/SignInBottleDesk.svg";

export const BcgBottleSection = styled.div`
width: 100%;
padding: 200px 20px 20px;
background-repeat: no-repeat;
background-image: url(${bcgSignInBottleMob});
background-position: center;

 @media (min-width: 768px) {
background-image: url(${bcgSignInBottleTab});
  }  
  
@media (min-width: 1440px) {
background-image: url(${bcgSignInBottleDesk});
  }

  `;