import { Entity, Column, OneToMany } from 'typeorm';
import { BoardMember } from '../../boards/entities/board-member.entity';
import { Board } from '../../boards/entities/board.entity';
import { BaseEntity } from '../../core/base.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column({ default: 'google' })
  provider: string;

  @Column({ nullable: true })
  providerId: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true })
  picture: string;

  @OneToMany(() => Board, (board) => board.admin, {
    onDelete: 'CASCADE',
  })
  user_board_admin: Board[];

  @OneToMany(() => BoardMember, (boardMember) => boardMember.user, {
    onDelete: 'CASCADE',
  })
  user_boards_members: BoardMember[];
}
