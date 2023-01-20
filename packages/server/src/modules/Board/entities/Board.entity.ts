import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/Base.entity';
import { User } from '../../User/entities/User.entity';
import { BoardCard } from '../modules/Card/entities/Card.entity';
import { BoardList } from '../modules/List/entities/BoardList.entity';
import { BoardMember } from './BoardMember.entity';

@Entity('Board')
export class Board extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ default: false })
  isPrivate: boolean;

  @ManyToOne(() => User, (user) => user.user_board_admin, {
    onDelete: 'CASCADE',
  })
  admin: string;

  @OneToMany(() => BoardMember, (boardMember) => boardMember.board, {
    onDelete: 'CASCADE',
  })
  members: BoardMember[];

  @OneToMany(() => BoardList, (list) => list.board, {
    onDelete: 'CASCADE',
  })
  lists: BoardList[];

  @OneToMany(() => BoardCard, (card) => card.board, {
    onDelete: 'CASCADE',
  })
  cards: BoardCard[];
}
