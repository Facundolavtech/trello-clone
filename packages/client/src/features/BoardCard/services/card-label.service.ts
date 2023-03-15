import { AxiosResponse } from 'axios';
import http from 'config/http';
import { IBoardCardLabel } from 'models/board-card.model';

export interface ICreateLabelParams {
  boardId: string;
  cardId: string;
  name: string;
  color: string;
}

export interface IDeleteLabelParams {
  boardId: string;
  cardId: string;
  id: string;
}

export async function createLabel(params: ICreateLabelParams): Promise<IBoardCardLabel> {
  const { boardId, cardId, ...rest } = params;

  const response: AxiosResponse<IBoardCardLabel> = await http.api.post(`boards/${boardId}/cards/${cardId}/labels/create`, { ...rest });

  return response.data;
}

export async function deleteLabel(params: IDeleteLabelParams): Promise<IBoardCardLabel> {
  const { boardId, cardId, id } = params;

  const response: AxiosResponse<IBoardCardLabel> = await http.api.delete(`boards/${boardId}/cards/${cardId}/labels/delete/${id}`);

  return response.data;
}
