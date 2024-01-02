import { useSelector } from "react-redux";
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectIcon, selectIsLoading } from "../components/redux/auth/selectors.js";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    const userIcon = useSelector(selectIcon);
    const isLoading = useSelector(selectIsLoading);

    return {
        isLoggedIn,
        isRefreshing,
        user,
        userIcon,
        isLoading,
    };
};