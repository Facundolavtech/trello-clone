import { useGoogleLogin } from '@react-oauth/google';
import SocialProviders from '../constants/providers';
import useAuthMethods from './useAuthMethods';

const useGoogleToken = () => {
  const { loginWithSocialProvider } = useAuthMethods();

  const getTokenAndLogin = useGoogleLogin({
    onSuccess: async (res) => {
      return await loginWithSocialProvider(SocialProviders.GOOGLE, res.access_token);
    },
    onError: () => {
      return;
    },
  });

  return { getTokenAndLogin };
};

export default useGoogleToken;
