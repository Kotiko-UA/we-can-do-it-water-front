import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/operations.js";
import * as Yup from 'yup';
import { Formik} from 'formik';
import { StyledLink, FormWrapper, Label, FieldInput, ErrorMsg, ButtonSbmt, EyeSlash, EyeActive } from './SignInForm.styled.js';
import React, { useState } from "react";


const SignInFormSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')

});

export const SignInForm = () => {
    
    const dispatch = useDispatch();    

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<EyeSlash alt="eye_slash">EyeSlash</EyeSlash>);
    
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(<EyeActive alt="eye_active">EyeActive</EyeActive>);
            setType('text')
        } else {
            setIcon(<EyeSlash alt="eye_slash">EyeSlash</EyeSlash>)
            setType('password')
        }
    };

    
    const handleSubmit = values => {
        dispatch(
            signIn({email: values.email, password: values.password})
        );
    };
       
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                autoComplete="off"
                validationSchema={SignInFormSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.resetForm();
                }}
            >
                <FormWrapper>
                        <Label>
                        Enter your email
                        </Label>
                        <FieldInput
                            type="email"
                            name="email"
                            placeholder="E-mail"/> 
                        <ErrorMsg name="email" component="div" />
                    
                        <Label>
                            Enter your password
                        </Label>
                        
                            <FieldInput
                            type={type}
                            name="password"
                            placeholder="Password"  
                            />
                            <span onClick={handleToggle}>
                                {icon}
                            </span>
                         
                        <ErrorMsg name="password" component="div" />
                        
                        <ButtonSbmt type="submit">Sign In</ButtonSbmt>
                </FormWrapper>
            </Formik>

            <div>
                <StyledLink to="/signUp">Sign up</StyledLink>
            </div>
        </div>
    );
};

