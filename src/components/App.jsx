import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage.js';

import HomePage from 'Pages/HomePage/HomePage.jsx';
// УВАГА! Щоб дивитися HomePage в браузері,
//  треба вставити "HomePage"(без лапок) в
//  Route замість "MainPage"

// поки що lazy не працює, підключайте маршрути просто через звичайний імпорт,
// тобто -> import SignUpPage from './pages/SignUpPage';

// import { lazy } from 'react';
// const HomePage = lazy(() => import('.....'));
// const SignUpPage = lazy(() => import('./SignUpPage'));
// const SigninPage = lazy(() => import('.......'));
// const ForgotPasswordPage = lazy(() => import('......'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<MainPage />}></Route>
        {/* <Route path="/signup" element={<SignUpPage />}></Route> */}
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        {/* <Route path="/signin" element={<SigninPage />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
      </Route>
    </Routes>
  );
};
