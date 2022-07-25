import { Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../core/base.entity';
import { User } from '../../users/entities/user.entity';
import { CardComment } from '../cards/comments/entities/comment.entity';
import { Card } from '../cards/entities/card.entity';
import { Board } from './board.entity';

@Entity('board_members')
export class BoardMember extends BaseEntity {
  @ManyToOne(() => Board, (board) => board.members, { onDelete: 'CASCADE' })
  board: string;

  @ManyToOne(() => User, (user) => user.user_boards_members)
  user: string;

  @ManyToMany(() => Card, (card) => card.members, { onDelete: 'CASCADE' })
  cards: Card[];

  @OneToMany(() => CardComment, (cardComment) => cardComment.author, {
    onDelete: 'CASCADE',
  })
  card_comments_authors: CardComment[];
}
