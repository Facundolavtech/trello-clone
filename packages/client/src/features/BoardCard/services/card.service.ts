import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { IBoardCard } from '../../../models/board-card.model';

export async function getCard(boardId: string, cardId: string): Promise<IBoardCard> {
  const response: AxiosResponse<IBoardCard> = await http.api.get(`${ApiRoutes.BOARD}/${boardId}/cards/${cardId}`);

  return response.data;
}
