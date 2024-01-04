import {
  AvatarContainer,
  MainSettingContainer,
  GenderLabel,
  InputFile,
  Label,
  MainContainer,
  DataContainer,
  DataLabel,
  PasswordLabel,
  CommonInput,
  YourPhoto,
  Text,
  SaveButton,
  PasswordInputContainer,
  PasswordContainer,
  GenderRadio,
  InfoContainer,
  CommonInfoContainer,
  AvatarOutContainer,
  UploadSvg,
  Avatar,
} from './Setting.styled';
import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectIcon, selectUser } from 'components/redux/auth/selectors';
import { updateAvatar } from 'components/redux/auth/operations';
import { useState } from 'react';

export const Setting = ({ close }) => {
  
  const currentUser = useSelector(selectUser);
  const avatar = useSelector(selectIcon);
  const splitName = currentUser.email.split('@');

  const [nameValue, setNameValue] = useState(splitName[0])
  const [emailValue, setEmailValue] = useState(currentUser.email);

  const dispatch = useDispatch();

  function changeAvatar(evt) {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateAvatar(formData));
  }

  return (
    <MainSettingContainer>
      <MainContainer>
        <div>
          <AvatarOutContainer>
            <YourPhoto>Your photo</YourPhoto>
            <AvatarContainer>
              <Avatar src={avatar} alt="avatar" />
              <InputFile
                type="file"
                name="file"
                id="file"
                accept="image/*"
                onChange={evt => changeAvatar(evt)}
              />
              <Label htmlFor="file">
                <UploadSvg /> Upload a photo
              </Label>
            </AvatarContainer>
          </AvatarOutContainer>
        </div>
        <CommonInfoContainer>
          <InfoContainer>
            <div>
              <Text>Your gender identity</Text>
              <GenderRadio
                id="girl"
                type="radio"
                value="girl"
                name="gender"
                required
              />
              <GenderLabel className="gender-label" htmlFor="girl">Girl</GenderLabel>
              <GenderRadio id="man" type="radio" value="man" name="gender" />
              <GenderLabel htmlFor="man">Man</GenderLabel>
            </div>
            <DataContainer>
              <DataLabel className="gender-label" htmlFor="name">Your name</DataLabel>
              <CommonInput
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                maxLength={32}
                value={nameValue}
                onChange={evt => setNameValue(evt.target.value)}
              />
              <DataLabel htmlFor="email">E-mail</DataLabel>
              <CommonInput
                id="email"
                type="text"
                name="email"
                placeholder="E-mail"
                value={emailValue}
                onChange={evt => setEmailValue(evt.target.value)}
              />
            </DataContainer>
          </InfoContainer>
          <PasswordContainer>
            <Text>Password</Text>
            <PasswordLabel>Outdated password:</PasswordLabel>
            <PasswordInputContainer>
              <PasswordInput />
            </PasswordInputContainer>
            <PasswordLabel>New Password:</PasswordLabel>
            <PasswordInputContainer>
              <PasswordInput />
            </PasswordInputContainer>
            <PasswordLabel>Repeat new password:</PasswordLabel>
            <PasswordInputContainer>
              <PasswordInput />
            </PasswordInputContainer>
          </PasswordContainer>
        </CommonInfoContainer>
        <SaveButton type="submit" onClick={close}>
          Save
        </SaveButton>
      </MainContainer>
    </MainSettingContainer>
  );
};
