import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../services/user.service';

const useUserProfile = () => {
  return useQuery(['user/profile'], async () => await getUserProfile(), { enabled: false });
};

export default useUserProfile;
