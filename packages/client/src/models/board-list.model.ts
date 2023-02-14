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

interface IBoardListCardLabel {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  color: string;
  cardId: string;
}

interface IBoardListCardComment {}

interface IBoardListCardAttachment {}

interface IBoardListCardMember {
  id: string;
  createdAt: number;
  updatedAt: number;
  user: IBoardListCardMemberUser;
}

interface IBoardListCardMemberUser {
  id: string;
  createdAt: number;
  updatedAt: number;
  provider: string;
  providerId: any;
  email: string;
  name: string;
  username: string;
  picture: any;
}

export interface IBoardList {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  cards: IBoardListCard[];
}
