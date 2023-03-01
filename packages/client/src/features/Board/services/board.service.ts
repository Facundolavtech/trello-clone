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

export interface IAddBoardMemberParams {
  id: string;
  userId: string;
}

export interface IDeleteBoardMemberParams extends IAddBoardMemberParams {}

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

export async function addMember(params: IAddBoardMemberParams): Promise<IBoard> {
  const { userId, id } = params;

  const response: AxiosResponse<IBoard> = await http.api.post(`${ApiRoutes.BOARD}/${id}/members/add`, { userId });
  return response.data;
}

export async function deleteMember(params: IDeleteBoardMemberParams): Promise<IBoard> {
  const { userId, id } = params;

  const payload = { userId };

  const response: AxiosResponse<IBoard> = await http.api.delete(`${ApiRoutes.BOARD}/${id}/members/delete`, { data: payload });
  return response.data;
}
