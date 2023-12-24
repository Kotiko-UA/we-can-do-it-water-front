import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
import { Layout } from "../components/Layout/Layout.js";
import { Route, Routes } from "react-router-dom";
//import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../components/redux/auth/operations";
import { useAuth } from "Hooks";
import MainPage from '../pages/MainPage/MainPage.js';
import ForgotPasswordPage from "../pages/ForgotPasswordPage.js";
import SignIn from "../pages/SignIn.js";
import SignUp from "../pages/SignUp.js"

//const HomePage = lazy(() => import("../pages/SignIn"));
//const SignUpPage = lazy(() => import("../pages/SignUp"));
//const SignInPage = lazy(() => import("../pages/SignIn.js"));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<MainPage />}></Route>
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/signin" component={<SignIn/>} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/signup" component={<SignUp />}/>
            }
          />

         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
        </Route>
      </Routes>
    </div>
  );
};

  
//<Route path="/signup" element={<SignUp />} />
  
// поки що lazy не працює, підключайте маршрути просто через звичайний імпорт,
// тобто -> import SignUpPage from './pages/SignUpPage';

// import { lazy } from 'react';
// const HomePage = lazy(() => import('.....'));
// const SignUpPage = lazy(() => import('./SignUpPage'));
// const SigninPage = lazy(() => import('.......'));
// const ForgotPasswordPage = lazy(() => import('......'));


//        <Route index element={<SignUp />} />