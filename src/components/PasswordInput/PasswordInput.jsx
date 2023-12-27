import { useState } from "react";

import { EyeActive, EyeButton, EyeSlash, PasswordInputStyle } from "./PasswordInput.styled";

export const PasswordInput = () => {
    const [password, setPassword] = useState("");
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
    <>
        <PasswordInputStyle type={visiblePassword ? "text" : "password"} placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)} minLength={8} maxLength={64} />
        <EyeButton type="button" onClick={() => setVisiblePassword(!visiblePassword)}>{visiblePassword ? <EyeActive /> : <EyeSlash />}</EyeButton>
    </>
    )
    
}