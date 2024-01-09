import { useAuth } from 'Hooks/useAuth.js';
import HomeDefaultPage from 'Pages/HomeDefaultPage/HomeDefaultPage';
import HomeUserPage from 'Pages/HomeUserPage/HomeUserPage';

const HomePage = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  console.log(isLoggedIn, 'isLoggedIn');
  console.log(isRefreshing, 'isRefreshing');
  return (
    <>
      {isRefreshing && <></>}
      {!isRefreshing && isLoggedIn && <HomeUserPage />}
      {!isRefreshing && !isLoggedIn && <HomeDefaultPage />}
    </>
    // <>{!isLoggedIn && !isRefreshing ? <HomeDefaultPage /> : <HomeUserPage />}</>
  );
};

export default HomePage;
