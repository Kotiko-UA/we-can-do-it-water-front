import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIcon,
  selectIsLoading,
  selectError,
} from '../components/redux/auth/selectors.js';
import { selectWaterIsLoading } from 'components/redux/water/selectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const userIcon = useSelector(selectIcon);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoadingWater = useSelector(selectWaterIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    userIcon,
    isLoading,
    isLoadingWater,
    error,
  };
};
