export interface IUser {
  id: string;
  name: string;
  email: string;
  picture: string | null;
  username: string;
  provider: UserProvider;
  createdAt: number;
  updatedAt: number;
}

export type UserProvider = 'google' | 'local';
