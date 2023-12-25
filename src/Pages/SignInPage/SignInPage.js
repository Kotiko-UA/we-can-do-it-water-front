//import { Helmet } from "react-helmet";
import {SignInForm} from "../../components/SignInForm/SignInForm.js";
import {Container, Title } from './SignInPage.styled.js';

export default function SignInPage() {
    return (
        <Container>
                <Title>Sign In</Title>
            <SignInForm />
        </Container>
    );
};

//<Helmet>  </Helmet>