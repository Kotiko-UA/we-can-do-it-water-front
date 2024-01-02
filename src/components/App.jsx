import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage/ForgetPasswordPage.js';
import RecoveryPasswordPage from 'Pages/RecoveryPage/RecoveryPage.jsx';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from 'Pages/HomePage/HomePage.jsx';
import { useDispatch } from "react-redux";
//import { useAuth } from "Hooks";
import { useEffect /*lazy*/ } from "react";
import { refreshUser } from "./redux/auth/operations.js";

export const App = () => {
  const dispatch = useDispatch();
  //const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


   return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/signUp" element={<RestrictedRoute redirectTo="/" component={<SignUpPage />} />}/>
          <Route path="/signIn" element={<RestrictedRoute redirectTo="/" component={<SignInPage />} />}/>
          <Route path="/forget_password" element={<ForgetPasswordPage />} />
          <Route path="/recovery" element={<RecoveryPasswordPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right"/>
    </div>
  );
};
