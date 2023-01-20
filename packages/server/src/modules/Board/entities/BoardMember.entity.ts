import { Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/Base.entity';
import { User } from '../../User/entities/User.entity';
import { BoardCard } from '../modules/Card/entities/Card.entity';
import { BoardCardComment } from '../modules/Card/modules/Comment/entities/Comment.entity';
import { Board } from './Board.entity';

@Entity('BoardMember')
export class BoardMember extends BaseEntity {
  @ManyToOne(() => Board, (board) => board.members, { onDelete: 'CASCADE' })
  board: string;

  @ManyToOne(() => User, (user) => user.user_boards_members)
  user: string;

  @ManyToMany(() => BoardCard, (card) => card.members, { onDelete: 'CASCADE' })
  cards: BoardCard[];

  @OneToMany(() => BoardCardComment, (cardComment) => cardComment.author, {
    onDelete: 'CASCADE',
  })
  card_comments_authors: BoardCardComment[];
}
