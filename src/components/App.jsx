import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
//import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../components/redux/auth/operations";
import { useAuth } from "Hooks";


//const HomePage = lazy(() => import("../pages/SignIn"));
const SignUpPage = lazy(() => import("../pages/SignUp"));
const SignInPage = lazy(() => import("../pages/SignIn"));
//const ContactsPage = lazy(() => import("../pages/Contacts"));
//const NotFoundPage = lazy(() => import("../pages/NotFound"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/signup" component={<SignUpPage />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/signin" component={<SignInPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

//        <Route index element={<SignUp />} />