import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import MainPage from '../Pages/MainPage/MainPage.js';
import { RestrictedRoute } from './RestrictedRoute';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage/ForgetPasswordPage.js';
import RecoveryPasswordPage from 'Pages/RecoveryPage/RecoveryPage.jsx';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage.jsx';
import { Toaster } from 'react-hot-toast';

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
              <RestrictedRoute
                redirectTo="/signUp"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signIn"
            element={
              <RestrictedRoute
                redirectTo="/signIn"
                component={<SignInPage />}
              />
            }
          />
          <Route path="/forgot_password" element={<ForgetPasswordPage />} />
          <Route path="/recovery" element={<RecoveryPasswordPage />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
