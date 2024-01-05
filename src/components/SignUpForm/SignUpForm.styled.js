import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import { ReactComponent as EyeSlashSvg } from "../../icons/eye_slash.svg";
import { ReactComponent as EyeActiveSvg } from "../../icons/eye_active.svg";
import { Field, Form, ErrorMessage } from 'formik';


export const EyeSlash = styled(EyeSlashSvg)`
  width: 16px;
  height: 16px;
  position: relative; 
  top: 15px;
  right: 25px;
  vertical-align: middle; 
  cursor: pointer;
`;

export const EyeActive = styled(EyeActiveSvg)`
  width: 16px;
  height: 16px;
  position: relative; 
  top: 15px;
  right: 25px;
  vertical-align: middle; 
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.primaryBlue};

  display: flex;
  align-items: center;
  margin-top:16px;

  &:hover,
  :focus{
    color: ${props => props.theme.secondaryOrange};
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
color: ${props => props.theme.primaryBlack};
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
margin-top: 16px;
`;

export const InputWrapper = styled.div`
display:flex;
`;

export const FieldInput = styled(Field)`
color: ${props => props.theme.secondaryBlue};
width: 280px;
height: auto;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
padding: 12px 10px;
border-radius: 6px;
border: 1px solid ${props => props.theme.secondaryLightBlue};
background: ${props => props.theme.primaryWhite};

&:focus{
color: ${props => props.theme.primaryBlue};
};

&::placeholder{
  color: ${props => props.theme.secondaryBlue};
  opacity:1;
};

@media (min-width: 768px) {
width: 336px;
  }

@media (min-width: 1440px) {
width: 384px;  
}
`;

export const ErrorMsg = styled(ErrorMessage)`
color: ${props => props.theme.secondaryRed};
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
`;


export const PasswordForm = styled.form`
position: absolute;
`;


export const ButtonSbmt = styled.button`
margin-top:16px;
margin-right: auto;
margin-left: auto;
width: 100%;
display: flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
align-self: center;
border-radius: 10px;
background: ${props => props.theme.primaryBlue};
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

color: ${props => props.theme.primaryWhite};
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