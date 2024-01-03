import { useDispatch } from 'react-redux';
import { useAuth } from 'Hooks/useAuth.js';
import { signUp } from '../redux/auth/operations';
import * as Yup from 'yup';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import {
  StyledLink,
  FormWrapper,
  Label,
  FieldInput,
  ErrorMsg,
  ButtonSbmt,
  EyeSlash,
  EyeActive,
} from './SignUpForm.styled.js';
import { Loader } from '../../components/Loader.jsx';
import toast from 'react-hot-toast';


const SignUpFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too short! At least 8')
    .required('Required')
    .max(64, 'Too long! Less then 64'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const SignUpForm = () => {
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

  const HandleSubmit = values => {
    dispatch(
      signUp({
        email: values.email,
        password: values.password,
      })
    );
  };


 const { isLoading, error } = useAuth();
  
  useEffect(() => {
    if (error) {
      toast.error(error);
   };
  }, [error]);

  
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Formik
            initialValues={{
              email: '',
              password: '',
              repeatPassword: '',
            }}
            
            validationSchema={SignUpFormSchema}
            onSubmit={(values, actions) => {
              HandleSubmit(values);
              actions.resetForm();
            }}
            >
              {({ errors, touched }) => (
                <FormWrapper>
                  <Label>Enter your email</Label>
                  <FieldInput
		                autoComplete="on"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                  style = {(errors.email && touched.email) ? {borderColor:"#EF5050", color:"#EF5050"} : null}/>
                  <ErrorMsg name="email" component="div" />

                  <Label>Enter your password</Label>
                  <FieldInput
		                autoComplete="on"
                    type={type}
                    name="password"
                    placeholder="Password"
                  style = {(errors.password && touched.password) ? {borderColor:"#EF5050", color:"#EF5050"} : null}/>
                  <span onClick={handleToggle}>{icon}</span>

                  <ErrorMsg name="password" component="div" />

                  <Label>Repeat password</Label>
                  <FieldInput
		                autoComplete="on"
                    type={type}
                    name="repeatPassword"
                    placeholder="Repeat password"
                    style = {(errors.repeatPassword && touched.repeatPassword) ? {borderColor:"#EF5050", color:"#EF5050"} : null}
                  />
                  <span onClick={handleToggle}>{icon}</span>

                  <ErrorMsg name="repeatPassword" component="div" />

                  <ButtonSbmt type="submit">Sign Up</ButtonSbmt>
                </FormWrapper>
              )}
          </Formik>

          <div>
            <StyledLink to="/signIn">Sign in</StyledLink>
          </div>
        </div>
      )}
    </div>
  );
};
