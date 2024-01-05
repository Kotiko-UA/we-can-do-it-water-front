import {
  AvatarContainer,
  MainSettingContainer,
  SettingText,
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
  ErrorMsg,
} from './Setting.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import { PasswordInput } from 'components/PasswordInput/PasswordInput';
import { selectIcon, selectUser } from 'components/redux/auth/selectors';
import { changeSettings, updateAvatar } from 'components/redux/auth/operations';
import { useState } from 'react';

// const SettingFormSchema = Yup.object().shape({
//   // name: Yup.string().name('Invalid name'),
//   email: Yup.string().email('Invalid email'),
//   password: Yup.string().min(8, 'Too short! At least 8'),
//   newPassword: Yup.string().min(8, 'Too short! At least 8').max(64, 'Too long! Less then 64'),
//   repeatPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });

// const passValidate = (value) => {
//   if (!value) {
//   return 'required'
// }
// }

export const Setting = ({ close }) => {

  const currentUser = useSelector(selectUser);
  const avatar = useSelector(selectIcon);
  const splitName = currentUser.email.split('@');
  const splitStartName = currentUser.name.split('_');
  
  const [nameValue, setNameValue] = useState(splitStartName[0] === "User" ? splitName[0] : currentUser.name)
  const [emailValue, setEmailValue] = useState(currentUser.email);
  const [selected, setSelected] = useState('yes');
  
  const dispatch = useDispatch();
  
  // console.log(nameValue)

  const handleRadioChange = evt => {
    setSelected(evt.target.value);
  };

  function changeAvatar(evt) {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateAvatar(formData));
  }

  const onSaveButton = (evt) => {
    dispatch(changeSettings({user: {name: evt.name, email: evt.email}}))
    console.log(evt)
    // close()
  }

  return (
    <MainSettingContainer>
      <SettingText>Setting</SettingText>
      <Formik initialValues={{
        name: nameValue,
        email: emailValue,
        password: '',
        newPassword: '',
        repeatPassword: ''
      }}
        onSubmit={(values) => {
            onSaveButton(values);
          }}>
        {({ errors, touched }) => (
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
                    checked={selected === 'yes'}
                    onChange={handleRadioChange}
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
                    style={
                  errors.name && touched.name
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }
                  />
                  <ErrorMsg name="name" component="div" />
                  <DataLabel htmlFor="email">E-mail</DataLabel>
                  <CommonInput
                    id="email"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    style={
                  errors.email && touched.email
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }
                  />
                  <ErrorMsg name="email" component="div" />
                </DataContainer>
              </InfoContainer>
              <PasswordContainer>
                <Text>Password</Text>
                <PasswordLabel>Outdated password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInput style={
                  errors.password && touched.password
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                } />
                  <ErrorMsg name="password" component="div" />
                </PasswordInputContainer>
                <PasswordLabel>New Password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInput style={
                  errors.newPassword && touched.newPassword
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                } />
                  <ErrorMsg name="newPassword" component="div" />
                </PasswordInputContainer>
                <PasswordLabel>Repeat new password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInput style={
                  errors.repeatPassword && touched.repeatPassword
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                } />
                  <ErrorMsg name="repeatPassword" component="div" />
                </PasswordInputContainer>
              </PasswordContainer>
            </CommonInfoContainer>
            <SaveButton type="submit">
              Save
            </SaveButton>
          </MainContainer>
        )}
      </Formik>
    </MainSettingContainer>
  );
};
