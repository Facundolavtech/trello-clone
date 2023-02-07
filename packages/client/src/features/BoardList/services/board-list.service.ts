import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { BoardList } from '../../../models/board-list.model';

interface IGetAllBoardListsParams {
  boardId: string;
}

export async function getAllBoardLists({ boardId }: IGetAllBoardListsParams): Promise<BoardList[]> {
  const response: AxiosResponse<BoardList[]> = await http.api.get(`/boards/${boardId}/lists`);
  return response.data;
}
