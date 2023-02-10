import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { BoardList } from '../../../models/board-list.model';

export interface ICreateListParams {
  boardId: string;
  title: string;
}

interface IGetAllBoardListsParams {
  boardId: string;
}

export async function createBoardList({ boardId, title }: ICreateListParams): Promise<BoardList> {
  const response: AxiosResponse<BoardList> = await http.api.post(`${ApiRoutes.BOARD}/${boardId}/lists/create`, { name: title });
  return response.data;
}

export async function getAllBoardLists({ boardId }: IGetAllBoardListsParams): Promise<BoardList[]> {
  const response: AxiosResponse<BoardList[]> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/lists`);
  return response.data;
}
