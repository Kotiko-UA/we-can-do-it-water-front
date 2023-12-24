import { Helmet } from "react-helmet";
import { SignUpForm } from "components/SignUpForm/SignUpForm.js";

export default function SignUp() {
    return (
        <div>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <SignUpForm/>
        </div>
    )
}