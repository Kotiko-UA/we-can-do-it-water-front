import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

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
        <Route path="/" element={<Layout />}></Route>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>

        {/*
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />  */}
      </Routes>
    </div>
  );
};
