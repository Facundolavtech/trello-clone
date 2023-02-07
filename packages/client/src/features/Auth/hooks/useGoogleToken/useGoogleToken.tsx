import { useGoogleLogin } from '@react-oauth/google';
import SocialProviders from '../../constants/providers';
import useAuthMethods from '../useAuthMethods/useAuthMethods';

const useGoogleToken = () => {
  const { loginSocialMutation } = useAuthMethods();

  const getTokenAndLogin = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      loginSocialMutation.mutate({ provider: SocialProviders.GOOGLE, token: access_token });
    },
    onError: () => {
      return null;
    },
  });

  return { getTokenAndLogin };
};

export default useGoogleToken;
