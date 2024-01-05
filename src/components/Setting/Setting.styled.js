import styled from 'styled-components';

import { ReactComponent as ArrowUpSvg } from '../../icons/arrow-up.svg';

export const MainSettingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
      width: 1008px;
  }
`;

export const SettingText = styled.p`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const MainContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1440px) {
    width: 1008px;
  }
`;

export const GeneralText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const YourPhoto = styled(GeneralText)`
  margin-bottom: 8px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  margin-right: 34px;
`;

export const AvatarOutContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.primaryBlack};

`;

export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UploadSvg = styled(ArrowUpSvg)`
  color: ${props => props.theme.primaryBlue};
  width: 16px;
  height: 16px;
`;

export const Label = styled.label`
  font-family: 'Roboto';
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${props => props.theme.primaryBlue};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled(GeneralText)`
  margin-bottom: 12px;
`;

export const GenderRadio = styled.input`
  position: relative;
  appearance: none;
  box-sizing: content-box;
  width: 14px; 
  height: 14px; 
  border: 1px solid ${({theme}) => theme.primaryBlue}; 
  border-radius: 50%; 
  cursor: pointer;

  &::before {
    /* box-sizing: content-box; */
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

export const GenderLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-right: 24px;
  margin-left: 6px;
`;


export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommonInfoContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 1440px) {
    margin-top: 52px;
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;
`;

export const DataLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 8px;
`;
export const CommonInput = styled.input`
  width: 256px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.secondaryLightBlue};
  color: ${props => props.theme.primaryBlue};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 24px;

  &::placeholder {
    color: rgba(158, 187, 255, 1);
  }
  

  @media (min-width: 768px) {
    width: 392px;
  }
`;

export const PasswordInputContainer = styled.div`
  display: flex;
  width: 256px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.secondaryLightBlue};
  color: ${props => props.theme.primaryBlue};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-top: 8px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    width: 392px;
  }
`;

export const PasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const SaveButton = styled.button`
  margin: 0 auto;
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.primaryWhite};
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

  @media (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
    margin-left: 498px;
  }

  @media (min-width: 1440px) {
    margin-left: 800px;
  }
`;
