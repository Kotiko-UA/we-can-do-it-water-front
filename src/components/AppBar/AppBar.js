import { Navigation } from "../Navigation/Navigation";
//import { UserMenu } from "../UserMenu/UserMenu.js";
import MainPage from "Pages/MainPage/MainPage";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "Hooks";


export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <MainPage/> : <AuthNav />}
        </header>
    );
};

//<UserMenu />