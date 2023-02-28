import { IBoardMember } from './board.model';

export interface IBoardListCard {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: any;
  cover: any;
  boardId: string;
  listId: string;
  members: IBoardListCardMember[];
  attachments: IBoardListCardAttachment[];
  labels: IBoardListCardLabel[];
  comments: IBoardListCardComment[];
}

export interface IBoardListCardLabel {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  color: string;
  cardId: string;
}

export interface IBoardListCardComment {}

export interface IBoardListCardAttachment {}

export interface IBoardListCardMember extends IBoardMember {}

export interface IBoardList {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  cards: IBoardListCard[];
}
