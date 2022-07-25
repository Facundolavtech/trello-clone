import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../core/base.entity';
import { User } from '../../users/entities/user.entity';
import { Card } from '../cards/entities/card.entity';
import { List } from '../lists/entities/list.entity';
import { BoardMember } from './board-member.entity';

@Entity('board')
export class Board extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ default: true })
  visible: boolean;

  @ManyToOne(() => User, (user) => user.user_board_admin, {
    onDelete: 'CASCADE',
  })
  admin: string;

  @OneToMany(() => BoardMember, (boardMember) => boardMember.board, {
    onDelete: 'CASCADE',
  })
  members: BoardMember[];

  @OneToMany(() => List, (list) => list.board, {
    onDelete: 'CASCADE',
  })
  lists: List[];

  @OneToMany(() => Card, (card) => card.board, {
    onDelete: 'CASCADE',
  })
  cards: Card[];
}
