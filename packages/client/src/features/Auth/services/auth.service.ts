import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { ILoginFormValues } from '../components/Form/Login';
import { IRegisterFormValues } from '../components/Form/Register';
import SocialProviders from '../constants/providers';

interface ILoginWithSocialProviderParams {
  provider: SocialProviders;
  token: string;
}

export async function loginWithSocialProvider({ provider, token }: ILoginWithSocialProviderParams): Promise<void> {
  return await http.api.post(`${ApiRoutes.AUTH}/${provider}`, { token });
}

export async function loginWithLocalProvider(credentials: ILoginFormValues): Promise<void> {
  return await http.api.post(`${ApiRoutes.AUTH}/local/login`, credentials);
}

export async function registerWithLocalProvider(credentials: IRegisterFormValues): Promise<void> {
  return await http.api.post(`${ApiRoutes.AUTH}/local/register`, credentials);
}

export async function logout(): Promise<void> {
  return await http.api.get(`${ApiRoutes.AUTH}/logout`);
}
