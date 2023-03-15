import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { IBoardCard } from '../../../models/board-card.model';

export interface ICreateCardParams {
  boardId: string;
  listId: string;
  title: string;
}

export interface IUpdateCardParams {
  boardId: string;
  cardId: string;
  title?: string;
  description?: string;
  cover?: string;
}

export async function createCard(params: ICreateCardParams): Promise<IBoardCard> {
  const { boardId, listId, title } = params;

  const response: AxiosResponse<IBoardCard> = await http.api.post(`${ApiRoutes.BOARD}/${boardId}/cards/create`, { listId, title });

  return response.data;
}

export async function updateCard(params: IUpdateCardParams): Promise<IBoardCard> {
  const { boardId, cardId, ...rest } = params;

  const response: AxiosResponse<IBoardCard> = await http.api.put(`${ApiRoutes.BOARD}/${boardId}/cards/update/${cardId}`, { ...rest });

  return response.data;
}

export async function getCard(boardId: string, cardId: string): Promise<IBoardCard> {
  const response: AxiosResponse<IBoardCard> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/cards/${cardId}`);

  return response.data;
}
