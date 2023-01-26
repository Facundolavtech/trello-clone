import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { ILoginFormValues } from '../components/Form/Login';
import { IRegisterFormValues } from '../components/Form/Register';
import SocialProviders from '../constants/providers';

const useAuthMethods = () => {
  const loginWithSocialProvider = async (provider: SocialProviders, access_token: string) => {
    return await http.api.post(`${ApiRoutes.AUTH}/${provider}`, { token: access_token });
  };

  const loginWithLocalProvider = async (credentials: ILoginFormValues) => {
    return await http.api.post(`${ApiRoutes.AUTH}/local/login`, credentials);
  };

  const registerWithLocalProvider = async (credentials: IRegisterFormValues) => {
    return await http.api.post(`${ApiRoutes.AUTH}/local/register`, credentials);
  };

  const logout = async () => {
    return await http.api.get(`${ApiRoutes.AUTH}/logout`);
  };

  return {
    loginWithSocialProvider,
    loginWithLocalProvider,
    registerWithLocalProvider,
    logout,
  };
};

export default useAuthMethods;
