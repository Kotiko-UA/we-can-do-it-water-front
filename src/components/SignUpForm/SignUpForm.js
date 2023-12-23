import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/operations";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useSelector } from "react-redux";


const SignUpFormSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too short! At least 8')
        .max(64, "Too long! Less then 64")
        .required("Required"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Required"),
});

export const SignUpForm = () => {
    
    return (
        <div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: "",
                }}
                autoComplete="off"
                validationSchema={SignUpFormSchema}
                onSubmit={(values, actions) => {
                    //addHandContact(values);
                    actions.resetForm();
                }}
            >
                <Form>
                    <label>
                        Enter your email
                    </label>
                    <Field type="email" name="email" placeholder="E-mail" /> 
                    <ErrorMessage name="email" component="div" />
                    <label>
                        Enter your password
                    </label>
                    <Field type="password" name="password" placeholder="Password" /> 
                    <ErrorMessage name="password" component="div" />
                    <label>
                        Repeat password
                    </label>
                    <Field type="password" name="password" placeholder="Repeat password" /> 
                    <ErrorMessage name="password" component="div" />
                    <button type="submit">Sign Up</button>
                    
                </Form>
            </Formik>
                    <a href="" >Sign in</a>
        </div>
    );
};

/*export const SignUpForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        
        const form = e.currentTarget;
        dispatch(
            signUp({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form  onSubmit={handleSubmit} autoComplete="off">

            <label >
                Enter your email
                <input type="email" name="email" />
            </label>
            <label >
                Enter your password
                <input type="password" name="password" />
            </label>
             <label >
                Repeat password
                <input type="password" name="password" />
            </label>
            <button type="submit">Sign Up</button>
            <a href="" >Sign In</a>
        </form>
    );
};*/