import { AxiosResponse } from 'axios';
import http from '../config/http';
import { ApiRoutes } from '../config/routes';
import { IUser } from '../models/user.model';

export async function getUserProfile(): Promise<IUser> {
  const response: AxiosResponse<IUser> = await http.api.get(`${ApiRoutes.USER}/profile`);

  return response.data;
}
