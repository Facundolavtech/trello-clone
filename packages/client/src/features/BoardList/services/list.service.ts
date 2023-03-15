import { AxiosResponse } from 'axios';
import http from 'config/http';
import { ApiRoutes } from 'config/routes';
import { IBoardList } from 'models/board-list.model';

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

export async function createList({ boardId, name }: ICreateListParams): Promise<IBoardList> {
  const response: AxiosResponse<IBoardList> = await http.api.post(`${ApiRoutes.BOARD}/${boardId}/lists/create`, { name });
  return response.data;
}

export async function getLists({ boardId }: IGetAllBoardListsParams): Promise<IBoardList[]> {
  const response: AxiosResponse<IBoardList[]> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/lists`);
  return response.data;
}

export async function updateList({ boardId, listId, ...update }: IUpdateListParams): Promise<IBoardList> {
  const response: AxiosResponse<IBoardList> = await http.api.put(`${ApiRoutes.BOARD}/${boardId}/lists/update/${listId}`, { ...update });
  return response.data;
}

export async function deleteList({ boardId, listId }: IDeleteListParams): Promise<IBoardList> {
  const response: AxiosResponse<IBoardList> = await http.api.delete(`${ApiRoutes.BOARD}/${boardId}/lists/delete/${listId}`);
  return response.data;
}
