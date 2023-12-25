//import { Helmet } from "react-helmet";
import { SignUpForm } from "components/SignUpForm/SignUpForm.js";
import {Container, Title } from './SignUpPage.styled.js';

export default function SignUpPage() {
    return (
        <Container>
                <Title>Sign Up</Title>
            <SignUpForm/>
        </Container>
    )
}
//<Helmet> </Helmet>