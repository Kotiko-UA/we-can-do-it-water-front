import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage.js';

// import { useState } from "react";

// import { PopUpsLinks } from "./PopUpsLinks/PopUpsLinks";
// import { LogOut } from "./LogOut/LogOut";
// import { Setting } from "./Setting/Setting";

// export const App = () => {
//   const [setting, setSetting] = useState(false);
//   const [logOut, setLogOut] = useState(false);

//   const changeSetting = () => {
//     setting ? setSetting(false) : setSetting(true)
//   }

//   const changeLogOut = () => {
//     logOut ? setLogOut(false) : setLogOut(true)
//   }

//   const handleBackdropClickSetting = (evt) => {
//     if (evt.target === evt.currentTarget) {
//       setSetting(false)
//     }
//   }

//   const closeSetting = () => {
//     setSetting(false)
//   }

//   const handleBackdropClickLogOut = (evt) => {
//     if (evt.target === evt.currentTarget) {
//       setLogOut(false)
//     }
//   }

//   const closeLogOut = () => {
//       setLogOut(false)
//   }

//   return (
//     <div>
//       <PopUpsLinks showLogOut={changeLogOut} showSetting={changeSetting} />
//       {setting && <Setting backdropClick={handleBackdropClickSetting} close={closeSetting} />}
//       {logOut && <LogOut backdropClick={handleBackdropClickLogOut} close={closeLogOut} />}
//     </div>
//   );
// };


// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout/Layout';
// import MainPage from '../Pages/MainPage/MainPage.js';

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

        {/* <Route path="/signup" element={<SignUpPage />}></Route>
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/signin" element={<SigninPage />} />
         <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
      </Route>
    </Routes>
  );
};
