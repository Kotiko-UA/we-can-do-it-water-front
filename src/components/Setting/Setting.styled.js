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
padding: 32px 12px;
background-color: rgba(255, 255, 255, 1);
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

@media(min-width: 768px) {
  padding: 32px 24px;
}
`;

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const SettingContainer = styled.div`
width: 100%;
display: flex;
margin-bottom: 24px;
justify-content: space-between;
align-items: center;
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

export const SettingText = styled.p`
font-family: 'Roboto';
font-size: 26px;
font-weight: 500;
line-height: 1.23;
`;

export const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

export const GeneralText = styled.p`
font-family: 'Roboto';
font-size: 18px;
font-weight: 500;
line-height: 1.11;
`

export const YourPhoto = styled(GeneralText)`
margin-bottom: 8px;
`

export const AvatarContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;
margin-bottom: 24px;
margin-right: 34px;
`

export const avatarOutContainer = styled.div`
@media(min-width: 768px) {
  display: flex;
}
`

export const Avatar = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: black;
`

export const InputFile = styled.input`
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
`

export const Label = styled.label`
font-family: 'Roboto';
white-space: nowrap;
font-size: 14px;
font-weight: 500;
line-height: 1.29;
color: rgba(64, 123, 255, 1);
display: flex;
align-items: center;
gap: 8px;
`

export const Text = styled(GeneralText)`
margin-bottom: 12px;
`

export const GenderRadio = styled.input`
/* visibility: hidden; */
`

export const GenderLabel = styled.label`
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 1.25;
margin-right: 24px;
margin-left: 6px;
`

// export const CustomRadio = styled.span`
//   width: 14px;
//   height: 14px;
//   border: 1px solid rgba(64, 123, 255, 1);
//   border-radius: 50%;
//   display: inline-block;

//   ::after {
//     content: '';
//   width: 12px;
//   height: 12px;
//   background-color: #f4b400;
//   border-radius: 50%;
//   }
// `

export const InfoContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

export const CommonInfoContainer = styled.div`
@media(min-width: 1440px) {
  display: flex;
  gap: 24px;
}
`

export const DataContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 24px;

@media(min-width: 1440px) {
  margin-top: 52px;
}
`

export const PasswordContainer = styled.div`
width: 100%;
`

export const DataLabel = styled.label`
font-family: 'Roboto';
font-size: 18px;
font-weight: 500;
line-height: 1.11;
margin-bottom: 8px;
`
export const CommonInput = styled.input`
width: 256px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid rgba(215, 227, 255, 1);
color: rgba(64, 123, 255, 1);
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 1.25;
margin-bottom: 24px;

&::placeholder {
  color: rgba(158, 187, 255, 1)
}


@media(min-width: 768px) {
  width: 392px;
}
`

export const PasswordInputContainer = styled.div`
display: flex;
width: 256px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid rgba(215, 227, 255, 1);
color: rgba(64, 123, 255, 1);
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 1.25;
margin-top: 8px;
margin-bottom: 12px;

@media(min-width: 768px) {
  width: 392px;
}
`

export const PasswordLabel = styled.label`
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 1.25;
`

export const SaveButton = styled.button`
margin: 0 auto;
background-color: rgba(64, 123, 255, 1);
color: rgba(255, 255, 255, 1);
width: 256px;
margin-top: 12px;
padding: 8px 30px;
border-radius: 10px;
font-family: 'Roboto';
font-size: 16px;
font-weight: 500;
line-height: 1.25;
text-align: center;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);


@media(min-width: 768px) {
  width: 160px;
  padding: 10px 30px;
  margin-left: 498px;
}

@media(min-width: 1440px) {
  margin-left: 800px;
}
`