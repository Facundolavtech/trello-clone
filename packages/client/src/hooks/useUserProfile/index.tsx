import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../services/user.service';

const useUserProfile = () => {
  const { data, isLoading, error, refetch } = useQuery(['user/profile'], async () => await getUserProfile(), { enabled: false });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useUserProfile;
