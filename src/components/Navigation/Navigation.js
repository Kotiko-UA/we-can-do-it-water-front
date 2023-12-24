import { NavLink } from "react-router-dom";
import { useAuth } from "Hooks";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink to="/">
                Logo
            </NavLink>
            {isLoggedIn && (
            <NavLink to="/signin">
                Sign In
            </NavLink>
            )}
        </nav>
    );
};

/*
<NavLink to="/signIn">
                Sign in
            </NavLink>



*/