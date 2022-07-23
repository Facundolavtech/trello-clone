import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from '../../core/base.entity';
import { User } from '../../users/entities/user.entity';
import { Card } from '../cards/entities/card.entity';
import { List } from '../lists/entities/list.entity';

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

  @ManyToMany(() => User, (user) => user.user_board_members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'board_members',
    joinColumn: {
      name: 'board_id',
    },
    inverseJoinColumn: {
      name: 'user_id',
    },
  })
  members: User[];

  @ManyToMany(() => User, (user) => user.user_boards_admins, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({
    name: 'board_admins',
    joinColumn: {
      name: 'board_id',
    },
    inverseJoinColumn: {
      name: 'user_id',
    },
  })
  admins: User[];

  @OneToMany(() => List, (list) => list.board, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  lists: List[];

  @OneToMany(() => Card, (card) => card.board, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  cards: Card[];
}
