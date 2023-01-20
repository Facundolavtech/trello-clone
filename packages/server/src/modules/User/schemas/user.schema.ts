import { UserProviders } from '../constants';

export interface IUser {
  provider: UserProviders;
  providerId: string;
  email: string;
  username: string;
  password?: string;
  name: string;
  picture?: string;
}

export interface IUserProfile {
  id: string;
  name: string;
  provider: UserProviders;
  username: string;
  picture: string | null;
  createdAt: number;
  updatedAt: number;
  email: string;
}
