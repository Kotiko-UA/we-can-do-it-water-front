import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";

import { EyeButton, PasswordInputStyle } from "./PasswordInput.styled";

export const PasswordInput = () => {
    const [password, setPassword] = useState("");
    const [visiblePassword, setVisiblePassword] = useState(false);

    return (
    <>
        <PasswordInputStyle type={visiblePassword ? "text" : "password"} placeholder="Password" value={password} onChange={evt => setPassword(evt.target.value)} minLength={8} maxLength={64} />
        <EyeButton type="button" onClick={() => setVisiblePassword(!visiblePassword)}>{visiblePassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}</EyeButton>
    </>
    )
    
}