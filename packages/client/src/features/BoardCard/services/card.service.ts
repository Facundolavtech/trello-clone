import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { IBoardCard } from '../../../models/board-card.model';

export interface ICreateCardParams {
  boardId: string;
  listId: string;
  title: string;
}

export async function createCard(params: ICreateCardParams): Promise<IBoardCard> {
  const { boardId, listId, title } = params;

  const response: AxiosResponse<IBoardCard> = await http.api.post(`${ApiRoutes.BOARD}/${boardId}/cards/create`, { listId, title });

  return response.data;
}

export async function getCard(boardId: string, cardId: string): Promise<IBoardCard> {
  const response: AxiosResponse<IBoardCard> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/cards/${cardId}`);

  return response.data;
}
