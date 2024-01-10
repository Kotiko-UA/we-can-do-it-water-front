import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from './redux/auth/operations.js';


const HomePage = lazy(() => import("../Pages/HomePage/HomePage.jsx"));
const SignUpPage = lazy(() => import("../Pages/SignUpPage/SignUpPage.jsx"));
const SignInPage = lazy(() => import("../Pages/SignInPage/SignInPage.jsx"));

const ForgetPasswordPage = lazy(() => import("../Pages/ForgetPasswordPage/ForgetPasswordPage.js"));
const RecoveryPasswordPage = lazy(() => import("../Pages/RecoveryPage/RecoveryPage.jsx"));




export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          <Route
            path="/signUp"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/recovery" element={<RecoveryPasswordPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};
