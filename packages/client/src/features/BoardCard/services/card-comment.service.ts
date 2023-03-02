import { AxiosResponse } from 'axios';
import http from '../../../config/http';
import { IBoardCardComment } from '../../../models/board-card.model';

export interface ICreateCommentParams {
  boardId: string;
  cardId: string;
  content: string;
}

export async function createComment(params: ICreateCommentParams) {
  const response: AxiosResponse<IBoardCardComment> = await http.api.post(`boards/${params.boardId}/cards/${params.cardId}/comments/create`, {
    content: params.content,
  });

  return response.data;
}
