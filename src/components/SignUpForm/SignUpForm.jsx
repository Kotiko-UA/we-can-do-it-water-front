import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/operations";
import * as Yup from 'yup';
import { Formik} from 'formik';
import React, { useState } from "react";
import { StyledLink, FormWrapper, Label, FieldInput, ErrorMsg, ButtonSbmt, EyeSlash, EyeActive } from './SignUpForm.styled.js';




const SignUpFormSchema = Yup.object().shape({
    email: Yup.string()
        .email().required('Required'),
    password: Yup.string()
        .min(8, 'Too short! At least 8').required('Required')
        .max(64, "Too long! Less then 64"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required"),
});


export const SignUpForm = () => {
    
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
            signUp({email: values.email, password: values.password, repeatPassword: values.repeatPassword})
        );
};
       
    return (
        <div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeatPassword: "",
                }}
                autoComplete="off"
                validationSchema={SignUpFormSchema}
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
                        placeholder="E-mail" /> 
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
                    
                    <Label>
                        Repeat password
                    </Label>
                    <FieldInput
                        type={type}
                        name="repeatPassword"
                        placeholder="Repeat password" /> 
                        <span onClick={handleToggle}>
                                {icon}
                        </span>
                    
                    <ErrorMsg name="repeatPassword" component="div" />

                    <ButtonSbmt type="submit">Sign Up</ButtonSbmt>
                    
                </FormWrapper>
            </Formik>

            <div>
                <StyledLink to="/signIn">Sign in</StyledLink>
            </div>
        </div>
    );
};

            
