//import { useEffect, lazy } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import MainPage from '../Pages/MainPage/MainPage.js';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route
            path="/signUp"
            element={
              <RestrictedRoute redirectTo="/signUp" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute redirectTo="/signIn" component={<SignInPage />} />
            }
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </div>
  );
};

  
//<Route path="/signup" element={<SignUp />} />
////import { PrivateRoute } from "./PrivateRoute";
// поки що lazy не працює, підключайте маршрути просто через звичайний імпорт,
// тобто -> import SignUpPage from './pages/SignUpPage';

// import { lazy } from 'react';
// const HomePage = lazy(() => import('.....'));
// const SignUpPage = lazy(() => import('./SignUpPage'));
// const SigninPage = lazy(() => import('.......'));
// const ForgotPasswordPage = lazy(() => import('......'));

//const HomePage = lazy(() => import("../pages/SignIn"));
//const SignUpPage = lazy(() => import("../pages/SignUp"));
//const SignInPage = lazy(() => import("../pages/SignIn.js"));


//        <Route index element={<SignUp />} />