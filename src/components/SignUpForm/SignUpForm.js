import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/operations";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import { useSelector } from "react-redux";
import { StyledLink } from './SignUpForm.styled.js';


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
                <Form>
                    <label>
                        Enter your email
                    </label>
                    <Field type="email" name="email" placeholder="E-mail"/> 
                    <ErrorMessage name="email" component="div" />
                    
                    <label>
                        Enter your password
                    </label>
                    <Field type="password" name="password" placeholder="Password" /> 
                    <ErrorMessage name="password" component="div" />
                    <label>
                        Repeat password
                    </label>
                    <Field type="password" name="repeatPassword" placeholder="repeat password" /> 
                    <ErrorMessage name="repeatPassword" component="div" />
                    <button type="submit">Sign Up</button>
                    
                </Form>
            </Formik>

            <div>
                <StyledLink to="/signIn">Sign in</StyledLink>
            </div>
        </div>
    );
};

            
