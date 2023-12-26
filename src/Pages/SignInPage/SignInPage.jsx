//import { Helmet } from "react-helmet";
import {SignInForm} from "../../components/SignInForm/SignInForm.jsx";
import {Container, Title, SignInSection} from './SignInPage.styled.js';


export default function SignInPage() {
    return (
        <SignInSection>
            <Container>
                <Title>Sign In</Title>
                <SignInForm />
            </Container>
        </SignInSection>
        
    );
};

//<Helmet>  </Helmet>