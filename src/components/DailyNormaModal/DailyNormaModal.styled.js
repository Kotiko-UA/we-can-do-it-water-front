
import styled from 'styled-components';
import { ReactComponent as Close } from '../../icons/close.svg';
import {ErrorMessage, Field, Form } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  -webkit-backdrop-filter: blur(11px);
  backdrop-filter: blur(11px);
  z-index: 999;
`;

export const Modal = styled.div`
  position: absolute;
  padding: 24px 12px;
  max-width: 256px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  overflow-y: auto;
  transform: translate(-50%, -50%) scale(1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  color: ${({theme}) => theme.primaryBlack};

  @media screen and (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 592px;
  }
`;

export const ButtonClose = styled.button`
  /* display: block; */
  padding: 2px;
  background-color: transparent;
  margin-left: auto;
  width: 24px;
  height: 24px;
  scale: 1;
  transition: scale 100ms linear;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;
export const ButtonCloseIcon = styled(Close)`
  fill: #407bff;
  width: 24px;
  height: 24px;
  display: block;
`;

export const WrapTitle = styled.div`
display: flex;
justify-content: space-between;
`;

export const Title = styled.h1`
font-size: 26px;
font-weight: 500;
line-height: 1.23;
`;

export const TextWrap = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
line-height: 1.25;
gap: 16px;
margin-bottom: 12px;

@media screen and (min-width: 768px) {
flex-direction: row;
gap: 24px;
}
`;

export const Formula = styled.span`
font-size: 18px;
line-height: 1.33;
color: ${({theme}) => theme.primaryBlue};
`;

export const WrapInfo = styled.div`
padding: 10px;
font-size: 12px;
line-height: 1.33;
border-radius: 10px;
border: 1px solid #D7E3FF;
color: #8F8F8F;
`;

export const SpanStar = styled.span`
color: ${({theme}) => theme.primaryBlue};
`;

export const FormStyled = styled(Form)`
font-size: 16px;
line-height: 1.25;
`;

export const FormCalculateWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const Subtitle = styled.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`;

export const RadioWrap = styled.div`
display: flex;
gap: 24px;
`;

export const RadioBtnLabel = styled.label`
display: flex;
gap: 6px;
cursor: pointer;
color: #000; /* Змініть колір тексту на ваш вибір */
  font-size: 16px; /* Змініть розмір шрифту на ваш вибір */
`;

export const RadioBtnField = styled(Field)`
 position: relative;
  appearance: none; 
  width: 14px; 
  height: 14px; 
  border: 1px solid ${({theme}) => theme.primaryBlue}; 
  border-radius: 50%; 
  margin-top: 2px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7px; 
    height: 7px; 
    background-color: transparent; 
    border-radius: 50%;
  }

  &:checked {
    &::before {
      background-color: ${({theme}) => theme.primaryBlue};
    }
  }
`;

export const FieldForm = styled(Field)`
margin-top: 8px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid #D7E3FF;
color: ${({theme}) => theme.primaryBlue};
width: 100%;
`;

export const ErrMsg = styled(ErrorMessage)`
font-size: 14px;
color: ${({theme}) => theme.secondaryRed};
line-height: 1.28;
margin-top: 4px;
font-weight: 400;
`;


export const TextNorma = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 1.33;
color: ${({theme}) => theme.primaryBlue};
`;

export const NormaWrap = styled.div`
display: flex;
gap: 6px;
`;

export const LabelFormNorma = styled.label`
margin-top: 8px;
margin-bottom: 8px;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`;

export const ButtonSave = styled.button`
width: 100%;
margin-top: 16px;
padding: 8px 30px;
justify-content: center;
align-items: center;
border-radius: 10px;
background: #407BFF;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
color: ${({theme}) => theme.primaryWhite};

&:hover {
padding: 10px 30px;
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
}
&:active {
  box-shadow: none;
}
@media screen and (min-width: 768px) {
width: 160px;
padding: 10px 30px;
font-size: 24px;
line-height: 1.33;
display: flex;
margin-left: auto;
}
`;

export const BtnWrap = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
align-items: flex-end;
}
`