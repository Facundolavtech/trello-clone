import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { IBoard } from '../../../models/board.model';

export async function getBoardById(id: string): Promise<IBoard> {
  const response: AxiosResponse<IBoard> = await http.api.get(`${ApiRoutes.BOARD}/${id}`);
  return response.data;
}

export async function getBoards() {
  const response: AxiosResponse<IBoard[]> = await http.api.get(`${ApiRoutes.BOARD}`);
  return response.data;
}
