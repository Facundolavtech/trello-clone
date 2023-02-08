import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { IBoard } from '../../../models/board.model';

export type BoardPrivacyType = 'private' | 'public';

export interface IHandleBoardPrivacyParams {
  type: BoardPrivacyType;
  id: string;
}

export interface ICreateBoardParams {
  title: string;
  cover: string;
  isPrivate: boolean;
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

export async function handleBoardPrivacy({ type, id }: IHandleBoardPrivacyParams): Promise<IBoard> {
  const formattedPrivacyType = type === 'private' ? true : false;

  const response: AxiosResponse<IBoard> = await http.api.put(`${ApiRoutes.BOARD}/update/${id}`, { isPrivate: formattedPrivacyType });
  return response.data;
}
