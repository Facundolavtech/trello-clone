import axios from 'axios';
import { ILoginFormValues } from 'features/Auth/components/Form/Login';
import { IRegisterFormValues } from 'features/Auth/components/Form/Register';
import SocialProviders from 'features/Auth/constants/providers';

export interface ILoginWithSocialProviderParams {
  provider: SocialProviders;
  token: string;
}

export async function loginWithSocialProvider({ provider, token }: ILoginWithSocialProviderParams): Promise<void> {
  return await axios.post(`/api/${provider}`, { token });
}

export async function loginWithLocalProvider(credentials: ILoginFormValues): Promise<void> {
  return await axios.post('/api/login', credentials);
}

export async function registerWithLocalProvider(credentials: IRegisterFormValues): Promise<void> {
  return await axios.post('/api/register', credentials);
}
