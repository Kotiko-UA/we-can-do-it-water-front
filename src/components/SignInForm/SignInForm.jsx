import { useDispatch } from 'react-redux';
import { useAuth } from 'Hooks/useAuth.js';
import { signIn } from '../redux/auth/operations.js';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  InputWrapper,
  StyledLink,
  FormWrapper,
  Label,
  FieldInput,
  ErrorMsg,
  ButtonSbmt,
  EyeSlash,
  EyeActive,
} from './SignInForm.styled.js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SignInFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Too short! At least 8').required('Required'),
});

export const SignInForm = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(
    <EyeSlash alt="eye_slash">EyeSlash</EyeSlash>
  );

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<EyeActive alt="eye_active">EyeActive</EyeActive>);
      setType('text');
    } else {
      setIcon(<EyeSlash alt="eye_slash">EyeSlash</EyeSlash>);
      setType('password');
    }
  };

  const handleSubmit = values => {
    dispatch(signIn({ email: values.email, password: values.password }));
  };

  const { error } = useAuth();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInFormSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <FormWrapper>
              <Label> Enter your email </Label>
              <FieldInput
                autoComplete="on"
                type="email"
                name="email"
                placeholder="E-mail"
                style={
                  errors.email && touched.email
                    ? { borderColor: '#EF5050', color: '#EF5050' }
                    : null
                }
              />
              <ErrorMsg name="email" component="div" />

              <Label> Enter your password </Label>
              <InputWrapper>
                <FieldInput
                  autoComplete="on"
                  type={type}
                  name="password"
                  placeholder="Password"
                  style={
                    errors.password && touched.password
                      ? { borderColor: '#EF5050', color: '#EF5050' }
                      : null
                  }
                />
                <span onClick={handleToggle}>{icon}</span>
              </InputWrapper>

              <ErrorMsg name="password" component="div" />

              <ButtonSbmt type="submit">Sign In</ButtonSbmt>
            </FormWrapper>
          )}
        </Formik>
        <div>
          <StyledLink to="/forgot-password">Forgot password?</StyledLink>
        </div>
        <div>
          <StyledLink to="/signUp">Sign up</StyledLink>
        </div>
      </div>
    </div>
  );
};
