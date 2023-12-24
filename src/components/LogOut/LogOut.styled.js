import styled from "styled-components";

export const Overlay = styled.div`
position: fixed;
background-color: rgba(0, 0, 0, 0.8);
width: 100%;
height: 100%;
z-index: 1;
`;

export const Modal = styled.div`
border-radius: 10px;
padding: 32px 24px;
background-color: rgba(255, 255, 255, 1);
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
color: rgba(64, 123, 255, 1);
background-color: transparent;
svg {
    display: block;
    color: rgba(64, 123, 255, 1);
    width: 18px;
    height: 18px;
}
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
color: rgba(255, 255, 255, 1);
background-color: rgba(239, 80, 80, 1);
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
margin-bottom: 24px;

@media(min-width: 768px) {
    margin-bottom: 0;
}
`;

export const CancelButton = styled(Button)`
color: rgba(64, 123, 255, 1);
background-color: rgba(215, 227, 255, 1);
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