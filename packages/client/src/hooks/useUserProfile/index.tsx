import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../services/user.service';

const useUserProfile = () => {
  const { data, isLoading, error } = useQuery(['user/profile'], async () => await getUserProfile());

  return {
    data,
    isLoading,
    error,
  };
};

export default useUserProfile;
