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
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage.js';

// поки що lazy не працює, підключайте маршрути просто через звичайний імпорт,
// тобто -> import SignUpPage from './pages/SignUpPage';

// import { lazy } from 'react';
// const HomePage = lazy(() => import('.....'));
// const SignUpPage = lazy(() => import('./SignUpPage'));
// const SigninPage = lazy(() => import('.......'));
// const ForgotPasswordPage = lazy(() => import('......'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<MainPage />}></Route>

         {/* <Route path="/signup" element={<SignUpPage />}></Route>
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/signin" element={<SigninPage />} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

//        <Route index element={<SignUp />} />