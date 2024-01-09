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
  PasswordInputStyle,
  EyeButton,
  EyeActive,
  EyeSlash,
} from './Setting.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { selectIcon, selectUser } from 'components/redux/auth/selectors';
import { changeSettings, updateAvatar } from 'components/redux/auth/operations';
import { useState } from 'react';

const SettingFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .max(15, 'Must be 15 characters or less'),
  email: Yup.string().email('Invalid email address'),
  password: Yup.string()
    .min(8, 'Too short! At least 8')
    .max(64, 'Too long! Less then 64')
  .required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});


export const Setting = () => {

  const [visiblePassword, setVisiblePassword] = useState(false);
  
  const currentUser = useSelector(selectUser);
  const avatar = useSelector(selectIcon);

  const splitName = currentUser.email.split('@');
  const splitStartName = currentUser.name.split('_');

  const nameValue = splitStartName[0] === "User" ? splitName[0] : currentUser.name;
  const emailValue = currentUser.email;
  
  const dispatch = useDispatch();
  
  function changeAvatar(evt) {
    const file = evt.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateAvatar(formData));
  }

  const onSaveButton = (evt) => {
    const { name, email, gender, password, newPassword } = evt;

    const data = { name, email, gender, password };
    
    if (newPassword !== '') {
      data.newPassword = newPassword
    }
    dispatch(changeSettings(data))

    // close()
  }

  return (
    <MainSettingContainer>
      <SettingText>Setting</SettingText>
      <Formik initialValues={{
        name: nameValue,
        email: emailValue,
        gender: currentUser.gender,
        password: '',
        newPassword: '',
        repeatPassword: ''
        }}
        validationSchema={SettingFormSchema}
        onSubmit={(values, actions) => {
          onSaveButton(values);
          actions.resetForm();
          }}>
        {({ values, handleChange, errors, touched }) => (
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
                    value='female'
                    onChange={handleChange}
                    type="radio"
                    name="gender"
                  />
                  <GenderLabel className="gender-label" htmlFor="girl">Girl</GenderLabel>
                  <GenderRadio value='male'
                    onChange={handleChange}
                    type="radio"
                    name="gender" />
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
                }/>
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
                }/>
                  <ErrorMsg name="email" component="div" />
                </DataContainer>
              </InfoContainer>
              <PasswordContainer>
                <Text>Password</Text>
                <PasswordLabel>Outdated password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInputStyle
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    type={visiblePassword ? 'text' : 'password'}
                    autoComplete="on"
                    placeholder="Password"
                    style={
                  errors.password && touched.password
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }/>
      <EyeButton
        type="button"
        onClick={() => setVisiblePassword(!visiblePassword)}>
        {visiblePassword ? <EyeActive /> : <EyeSlash />}
      </EyeButton>
                  <ErrorMsg name="password" component="div" />
                </PasswordInputContainer>
                <PasswordLabel>New Password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInputStyle
                    value={values.newPassword}
                    onChange={handleChange}
                    name='newPassword'
                    type={visiblePassword ? 'text' : 'password'}
                    autoComplete="on"
                    placeholder="Password"
                    style={
                  errors.newPassword && touched.newPassword
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }/>
      <EyeButton
        type="button"
        onClick={() => setVisiblePassword(!visiblePassword)}>
        {visiblePassword ? <EyeActive /> : <EyeSlash />}
      </EyeButton>
                  <ErrorMsg name="newPassword" component="div" />
                </PasswordInputContainer>
                <PasswordLabel>Repeat new password:</PasswordLabel>
                <PasswordInputContainer>
                  <PasswordInputStyle
                    value={values.repeatPassword}
                    onChange={handleChange}
                    name='repeatPassword'
                    type={visiblePassword ? 'text' : 'password'}
                    autoComplete="on"
                    placeholder="Password"
                    style={
                  errors.repeatPassword && touched.repeatPassword
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }/>
      <EyeButton
        type="button"
        onClick={() => setVisiblePassword(!visiblePassword)}>
        {visiblePassword ? <EyeActive /> : <EyeSlash />}
      </EyeButton>
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
