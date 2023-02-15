import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { BoardVisibility, IBoard } from '../../../models/board.model';

export type BoardPrivacyType = 'private' | 'public';

export interface IUpdateBoardParams {
  id: string;
  title?: string;
  cover?: string;
  visibility?: BoardVisibility;
}

export interface ICreateBoardParams {
  title: string;
  cover: string;
  visibility: BoardVisibility;
}

export async function createBoard(params: ICreateBoardParams): Promise<IBoard> {
  const response: AxiosResponse<IBoard> = await http.api.post(`${ApiRoutes.BOARD}/create`, params);
  return response.data;
}

export async function getBoardById(id: string): Promise<IBoard> {
  const response: AxiosResponse<IBoard> = await http.api.get(`${ApiRoutes.BOARD}/${id}`);
  return response.data;
}

export async function getBoards() {
  const response: AxiosResponse<IBoard[]> = await http.api.get(`${ApiRoutes.BOARD}`);
  return response.data;
}

export async function updateBoard(params: IUpdateBoardParams): Promise<IBoard> {
  const { id, ...rest } = params;

  const response: AxiosResponse<IBoard> = await http.api.put(`${ApiRoutes.BOARD}/update/${id}`, { ...rest });
  return response.data;
}
