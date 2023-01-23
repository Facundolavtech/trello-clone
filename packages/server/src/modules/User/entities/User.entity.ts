import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/Base.entity';
import { Board } from '../../Board/entities/Board.entity';
import { BoardMember } from '../../Board/entities/BoardMember.entity';
import { UserProviders } from '../constants';

@Entity('User')
export class User extends BaseEntity {
  @Column({ nullable: false, enum: UserProviders })
  provider: UserProviders;

  @Column({ nullable: true })
  providerId?: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true, select: false })
  password?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true })
  picture?: string;

  @OneToMany(() => Board, (board) => board.admin)
  user_board_admins: Board[];

  @OneToMany(() => BoardMember, (boardMember) => boardMember.user)
  user_board_members: BoardMember[];
}
