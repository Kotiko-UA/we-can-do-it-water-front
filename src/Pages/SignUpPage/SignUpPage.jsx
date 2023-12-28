import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import {SignUpContainer, Title, SignUpSection } from './SignUpPage.styled.js';
//import BcgBottleSignUp from "../../components/BcgImageSection/BcgBottleSignUp.jsx";

export default function SignUpPage() {
    return (
        <SignUpSection>
            <SignUpContainer>
                <Title>Sign Up</Title>
                <SignUpForm />
                
            </SignUpContainer>
        </SignUpSection>
        
    )
};

//<BcgBottleSignUp/>
