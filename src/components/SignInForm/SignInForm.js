import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/operations";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
//import { useSelector } from "react-redux";
import { StyledLink } from './SignInForm.styled.js';


const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required')

});


export const SignInForm = () => {
    
const dispatch = useDispatch();    

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
                    
                    <button type="submit">Sign In</button>
                    
                </Form>
            </Formik>

            <div>
                <StyledLink to="/signUp">Sign up</StyledLink>
            </div>
        </div>
    );
};
