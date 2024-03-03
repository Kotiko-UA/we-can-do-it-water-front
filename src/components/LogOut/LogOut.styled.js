import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin-left: 12px;
width: 244px;

@media(min-width: 768px) {
    width: 532px;
}
`;

export const LogOutText = styled.p`
font-family: 'Roboto';
font-size: 26px;
font-weight: 500;
line-height: 1.23;
margin-top: 8px;
margin-bottom: 24px;
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
width: 232px;
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

&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: ${props => props.theme.cubicBezier};
  }

  &:active {
    box-shadow: 0px 0px 0px 0px;
  }

@media(min-width: 768px) {
    margin-bottom: 0;
}
`;

export const CancelButton = styled(Button)`
color: ${props => props.theme.primaryBlue};
background-color: ${props => props.theme.secondaryLightBlue};
margin-bottom: 8px;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: ${props => props.theme.cubicBezier};
  }

  &:active {
    box-shadow: 0px 0px 0px 0px;
  }

@media(min-width: 768px) {
    margin-bottom: 0;
}
`;

export const MediaButtonsContainer = styled.div`
@media(min-width: 768px)  {
    display: flex;
    width: max-content;
    gap: 24px;
    justify-content: flex-end;
    margin-left: 188px;
    flex-direction: row-reverse;
}

@media(min-width: 1440px) {
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 200px;
}
`;