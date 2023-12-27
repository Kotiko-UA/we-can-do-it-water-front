import styled from "styled-components";

import { ReactComponent as CloseSvg } from "../../icons/close.svg";

export const Overlay = styled.div`
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
border-radius: 10px;
padding: 32px 24px;
background-color: ${props => props.theme.primaryWhite};
position: absolute;
left: 50%;
top: 20%;
transform: translate(-50%, -50%);

@media(min-width: 768px) {
    top: 30%;
}

@media(min-width: 1440px) {
    top: 50%;
}
`;

export const CloseButton = styled.button`
background-color: transparent;
`

export const Close = styled(CloseSvg)`
color: ${props => props.theme.primaryBlue};
width: 18px;
height: 18px;
`


export const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`;

export const LogOutContainer = styled.div`
width: 100%;
display: flex;
margin-bottom: 24px;
justify-content: space-between;
align-items: center;
`;

export const LogOutText = styled.p`
font-family: 'Roboto';
font-size: 26px;
font-weight: 500;
line-height: 1.23;
`;

export const SecondaryText = styled.p`
font-family: 'Roboto';
white-space: nowrap;
font-size: 18px;
font-weight: 500;
line-height: 1.11;
margin-bottom: 24px;
`;

export const Button = styled.button`
white-space: nowrap;
width: 100%;
padding: 8px 30px;
border-radius: 10px;
font-family: 'Roboto';
font-size: 16px;
font-weight: 500;
line-height: 1.25;
text-align: center;

@media(min-width: 768px)  {
    box-sizing: content-box;
    width: 100px;
    padding: 10px 30px;
    line-height: 1.33;
}
`

export const LogOutButton = styled(Button)`
color: ${props => props.theme.primaryWhite};
background-color: ${props => props.theme.secondaryRed};
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
margin-bottom: 24px;

@media(min-width: 768px) {
    margin-bottom: 0;
}
`;

export const CancelButton = styled(Button)`
color: ${props => props.theme.primaryBlue};
background-color: ${props => props.theme.secondaryLightBlue};
`;

export const MediaButtonsContainer = styled.div`
@media(min-width: 768px)  {
    display: flex;
    width: max-content;
    gap: 24px;
    justify-content: flex-end;
    margin-left: 200px;
    flex-direction: row-reverse;
}

@media(min-width: 1440px) {
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 200px;
}
`;