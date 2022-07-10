import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { List } from '../lists/entities/list.entity';

@Entity('board')
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  cover: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: true })
  visible: boolean;

  @ManyToMany(() => User, (user) => user.boards)
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

  @ManyToMany(() => User, (user) => user.boards)
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

  @OneToMany(() => List, (list) => list.board)
  lists: List[];
}
