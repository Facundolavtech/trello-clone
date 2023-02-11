import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { BoardList } from '../../../models/board-list.model';

export interface ICreateListParams {
  boardId: string;
  name: string;
}

interface IGetAllBoardListsParams {
  boardId: string;
}

export interface IUpdateListParams {
  boardId: string;
  listId: string;
  name?: string;
}

export interface IDeleteListParams {
  boardId: string;
  listId: string;
}

export async function createBoardList({ boardId, name }: ICreateListParams): Promise<BoardList> {
  const response: AxiosResponse<BoardList> = await http.api.post(`${ApiRoutes.BOARD}/${boardId}/lists/create`, { name });
  return response.data;
}

export async function getAllBoardLists({ boardId }: IGetAllBoardListsParams): Promise<BoardList[]> {
  const response: AxiosResponse<BoardList[]> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/lists`);
  return response.data;
}

export async function updateList({ boardId, listId, ...update }: IUpdateListParams): Promise<BoardList> {
  const response: AxiosResponse<BoardList> = await http.api.put(`${ApiRoutes.BOARD}/${boardId}/lists/update/${listId}`, { ...update });
  return response.data;
}

export async function deleteList({ boardId, listId }: IDeleteListParams): Promise<BoardList> {
  const response: AxiosResponse<BoardList> = await http.api.delete(`${ApiRoutes.BOARD}/${boardId}/lists/delete/${listId}`);
  return response.data;
}
