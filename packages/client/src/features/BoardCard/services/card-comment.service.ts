import { AxiosResponse } from 'axios';
import http from 'config/http';
import { IBoardCardComment } from 'models/board-card.model';

export interface ICreateCommentParams {
  boardId: string;
  cardId: string;
  content: string;
}

export interface IUpdateCommentParams extends ICreateCommentParams {
  id: string;
}

export interface IDeleteCommentParams {
  boardId: string;
  cardId: string;
  id: string;
}

export async function createComment(params: ICreateCommentParams) {
  const response: AxiosResponse<IBoardCardComment> = await http.api.post(`boards/${params.boardId}/cards/${params.cardId}/comments/create`, {
    content: params.content,
  });

  return response.data;
}

export async function updateComment(params: IUpdateCommentParams) {
  const response: AxiosResponse<IBoardCardComment> = await http.api.put(`boards/${params.boardId}/cards/${params.cardId}/comments/update/${params.id}`, {
    content: params.content,
  });

  return response.data;
}

export async function deleteComment(params: IDeleteCommentParams) {
  const response: AxiosResponse<IBoardCardComment> = await http.api.delete(`boards/${params.boardId}/cards/${params.cardId}/comments/delete/${params.id}`);

  return response.data;
}
