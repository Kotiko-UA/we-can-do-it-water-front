import {SignInForm} from "../../components/SignInForm/SignInForm.jsx";
import {SignInContainer, Title, SignInSection} from './SignInPage.styled.js';
//import BcgImageSignIn from "../../components/BcgImageSection/BcgImageSignIn.jsx";


export default function SignInPage() {
    return (
        <SignInSection>
            <SignInContainer>
                <Title>Sign In</Title>
                <SignInForm />    
            </SignInContainer> 
            
        </SignInSection>
       
            
    );
};

//<BcgImageSignIn />