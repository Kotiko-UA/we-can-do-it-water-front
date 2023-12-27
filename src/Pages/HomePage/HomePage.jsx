import { useAuth } from 'Hooks/useAuth.js';
import HomeDefaultPage from 'Pages/HomeDefaultPage/HomeDefaultPage';
import HomeUserPage from 'Pages/HomeUserPage/HomeUserPage';

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? <HomeUserPage /> : <HomeDefaultPage />}</>;
};

export default HomePage;
