import {SignInForm} from "../../components/SignInForm/SignInForm.jsx";
import {SignInContainer, Title, SignInSection} from './SignInPage.styled.js';


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

