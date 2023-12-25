import styled from "styled-components"


export const PasswordInputStyle = styled.input`
width: 100%;
border-radius: 6px;
color: rgba(64, 123, 255, 1);
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 1.25;

border: 0;
padding: 0;
&::placeholder {
    color: rgba(158, 187, 255, 1);
}

@media(min-width: 768px) {
  width: 392px;
}
`

export const EyeButton = styled.div`
color: rgba(64, 123, 255, 1);
background-color: transparent;
svg {
    display: block;
    color: rgba(64, 123, 255, 1);
}
`