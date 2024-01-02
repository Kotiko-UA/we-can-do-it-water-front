import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import { ReactComponent as EyeSlashSvg } from "../../icons/eye_slash.svg";
import { ReactComponent as EyeActiveSvg } from "../../icons/eye_active.svg";
import { Field, Form, ErrorMessage } from 'formik';


export const EyeSlash = styled(EyeSlashSvg)`
  width: 16px;
  height: 16px;
  position: relative; 
  bottom: 30px;
  left: 250px;
  vertical-align: middle; 
  cursor: pointer;

  @media (min-width: 768px) {
  width: 130px;
  }

  @media (min-width: 1440px) {
  width: 240px;  
}
`;

export const EyeActive = styled(EyeActiveSvg)`
  width: 16px;
  height: 16px;
  position: relative; 
  bottom: 30px;
  left: 250px;
  vertical-align: middle; 
  cursor: pointer;

  @media (min-width: 768px) {
width: 130px;
  }

@media (min-width: 1440px) {
width: 240px;  
}
`;

export const StyledLink = styled(NavLink)`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #407bff;

  display: flex;
  align-items: center;
  margin-top:16px;

  &:hover,
  :focus{
    color: var(--Secondary-color-5, #FF9D43);
  }
`;

export const FormWrapper = styled(Form)`
display: flex;
width: 280px;
flex-direction: column;
align-items: flex-start;

@media (min-width: 768px) {
width: 336px;
  }

@media (min-width: 1440px) {
width: 384px;   
  }

`;

export const Label = styled.label`
color: #2F2F2F;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
margin-top: 16px;
`;

export const FieldInput = styled(Field)`
color: #9EBBFF;
width: 280px;
height: auto;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
padding: 12px 10px;
border-radius: 6px;
border: 1px solid #D7E3FF;
background: #FFF;

&:focus{
color: #407BFF;
}

@media (min-width: 768px) {
width: 336px;
  }

@media (min-width: 1440px) {
width: 384px;   
  }


`;



export const ErrorMsg = styled(ErrorMessage)`
color: #EF5050;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
`;


export const ButtonSbmt = styled.button`
margin-right: auto;
margin-left: auto;
width: 100%;
display: flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
align-self: center;
border-radius: 10px;
background-color: var(--Primery-Color-Blue, #407BFF);
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

color: #FFFFFF;
text-align: center;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;

&:hover{
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
}

&:focus{
box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
}
`;




