import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute';
import ForgetPasswordPage from '../Pages/ForgetPasswordPage/ForgetPasswordPage.js';
import RecoveryPasswordPage from 'Pages/RecoveryPage/RecoveryPage.jsx';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage.jsx';
import { Toaster } from 'react-hot-toast';
import HomePage from 'Pages/HomePage/HomePage.jsx';
import { EditingWater } from './EditingWater/EditingWater.jsx';
import { DeleteWater } from './DeleteWater/DeleteWater.jsx';
import { AddWater } from './AddWater/AddWater.jsx';

export const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
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
          <Route path="/forget_password" element={<ForgetPasswordPage />} />
          <Route path="/recovery" element={<RecoveryPasswordPage />} />
        </Route>
      </Routes>
      <Toaster /> */}
      <AddWater />
    </div>
  );
};
