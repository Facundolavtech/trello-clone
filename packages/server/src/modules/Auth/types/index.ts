import { UserProviders } from '../../User/constants';

export interface IAuthProviderUserDTO {
  provider: UserProviders;
  providerId?: string;
  email: string;
  name: string;
  username: string;
  picture?: string;
}

export type IGoogleUserDTO = IAuthProviderUserDTO;

export interface IJwtPayload {
  id: string;
  email: string;
}
