import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'services/user.service';

const useUserProfile = () => {
  return useQuery(['user/profile'], getProfile);
};

export default useUserProfile;
