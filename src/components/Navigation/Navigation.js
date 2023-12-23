import { NavLink } from "react-router-dom";
import { useAuth } from "Hooks";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink to="/">
                Sign Up
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/signin">
                    Sign In
                </NavLink>
            )}
        </nav>
    );
};