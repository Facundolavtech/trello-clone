import { useGoogleLogin } from '@react-oauth/google';
import SocialProviders from '../constants/providers';
import useAuthMethods from './useAuthMethods';

const useGoogleToken = () => {
  const { loginSocialMutation } = useAuthMethods();

  const getTokenAndLogin = useGoogleLogin({
    onSuccess: (res) => {
      return loginSocialMutation.mutate({ provider: SocialProviders.GOOGLE, token: res.access_token });
    },
    onError: () => {
      return;
    },
  });

  return { getTokenAndLogin };
};

export default useGoogleToken;
