import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/Base.entity';
import { User } from '../../User/entities/User.entity';
import { BoardCard } from '../modules/Card/entities/Card.entity';
import { BoardCardComment } from '../modules/Card/modules/Comment/entities/Comment.entity';
import { Board } from './Board.entity';

@Entity('BoardMember')
export class BoardMember extends BaseEntity {
  @ManyToOne(() => Board, (board) => board.members, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
  board: Board;

  @Column({ select: false })
  boardId: string;

  @ManyToOne(() => User, (user) => user.user_board_members, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ select: false })
  userId: string;

  @ManyToMany(() => BoardCard, (boardCard) => boardCard.members, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  board_member_cards: BoardCard[];

  @OneToMany(() => BoardCardComment, (boardCardComment) => boardCardComment.author)
  board_member_card_comments: BoardCardComment[];
}
