import { IBoardMember } from './board.model';

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
  createdAt: string;
  updatedAt: string;
  name: string;
  url: string;
  type: string;
  cardId: string;
}

export interface IBoardCardLabel {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  color: string;
  cardId: string;
}

export interface IBoardCardComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  authorId: string;
  cardId: string;
}
