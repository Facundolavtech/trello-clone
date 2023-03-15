import { IBoardMember } from 'models/board.model';

export interface IBoardCard {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: string | null;
  cover: string | null;
  boardId: string;
  listId: string;
  attachments: IBoardCardAttachment[];
  labels: IBoardCardLabel[];
  comments: IBoardCardComment[];
  members: IBoardMember[];
}

export interface IBoardCardAttachment {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  url: string;
  type: string;
  cardId: string;
}

export interface IBoardCardLabel {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  color: string;
  cardId: string;
}

export interface IBoardCardComment {
  id: string;
  createdAt: number;
  updatedAt: number;
  content: string;
  authorId: string;
  cardId: string;
  author: IBoardMember;
}
