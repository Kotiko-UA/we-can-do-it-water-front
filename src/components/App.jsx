import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import MainPage from '../Pages/MainPage/MainPage.js';
import { RestrictedRoute } from "./RestrictedRoute";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage.jsx";

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

  
