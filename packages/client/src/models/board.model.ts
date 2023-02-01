import { UserProvider } from './user.model';

export interface IBoard {
  id: string;
  title: string;
  cover: string;
  description: string;
  isPrivate: boolean;
  admin: IBoardAdmin;
  members: IBoardMember[];
  createdAt: number;
  updatedAt: number;
}

export interface IBoardAdmin {
  id: string;
  name: string;
  username: string;
  email: string;
  picture: string | null;
  provider: UserProvider;
  providerId: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface IBoardMember {
  id: string;
  createdAt: number;
  updatedAt: number;
  user: IBoardMemberUser;
}

interface IBoardMemberUser {
  id: string;
  createdAt: number;
  updatedAt: number;
  provider: UserProvider;
  providerId: string | null;
  email: string;
  name: string;
  username: string;
  picture: string | null;
}
