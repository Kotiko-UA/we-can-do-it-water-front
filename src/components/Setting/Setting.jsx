import {
  AvatarContainer,
  Container,
  GenderLabel,
  InputFile,
  Label,
  MainContainer,
  DataContainer,
  SettingContainer,
  SettingText,
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
import { selectIcon } from 'components/redux/auth/selectors';
import { updateAvatar } from 'components/redux/auth/operations';

export const Setting = ({ close }) => {
  const avatar = useSelector(selectIcon);

  const dispatch = useDispatch();

  function changeAvatar(evt) {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateAvatar(formData));
  }

  return (
    <Container>
      <SettingContainer>
        <SettingText>Setting</SettingText>
      </SettingContainer>
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
              {/* <CustomRadio/> */}
              <GenderLabel htmlFor="girl">Girl</GenderLabel>
              <GenderRadio id="man" type="radio" value="man" name="gender" />
              {/* <CustomRadio/> */}
              <GenderLabel htmlFor="man">Man</GenderLabel>
            </div>
            <DataContainer>
              <DataLabel htmlFor="name">Your name</DataLabel>
              <CommonInput
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                maxLength={32}
              />
              <DataLabel htmlFor="email">E-mail</DataLabel>
              <CommonInput
                id="email"
                type="text"
                name="email"
                placeholder="E-mail"
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
    </Container>
  );
};
