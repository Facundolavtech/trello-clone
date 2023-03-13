import { useGoogleLogin } from '@react-oauth/google';
import SocialProviders from '../../constants/providers';
import useAuthMethods from '../useAuthMethods';

const useGoogleToken = () => {
  const { loginSocialMutation } = useAuthMethods();

  return useGoogleLogin({
    onSuccess: ({ access_token }) => {
      loginSocialMutation.mutate({ provider: SocialProviders.GOOGLE, token: access_token });
    },
    onError: () => {
      return null;
    },
  });
};

export default useGoogleToken;
