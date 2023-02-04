export interface BoardListCard {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: any;
  cover: any;
  boardId: string;
  listId: string;
  members: BoardListCardMember[];
  attachments: BoardListCardAttachment[];
  labels: BoardListCardLabel[];
  comments: BoardListCardComment[];
}

interface BoardListCardLabel {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  color: string;
  cardId: string;
}

interface BoardListCardComment {}

interface BoardListCardAttachment {}

interface BoardListCardMember {
  id: string;
  createdAt: number;
  updatedAt: number;
  user: BoardListCardMemberUser;
}

interface BoardListCardMemberUser {
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

export interface BoardList {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  cards: BoardListCard[];
}
