import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../common/entities/Base.entity';
import { User } from '../../User/entities/User.entity';
import { BoardCard } from '../modules/Card/entities/Card.entity';
import { BoardList } from '../modules/List/entities/BoardList.entity';
import { BoardMember } from './BoardMember.entity';

export enum BoardVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

@Entity('Board')
export class Board extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ enum: BoardVisibility, default: BoardVisibility.PUBLIC })
  visibility: BoardVisibility;

  @ManyToOne(() => User, (user) => user.user_board_admins, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
  @JoinColumn({ name: 'adminId' })
  admin: User;

  @Column({ select: false })
  adminId: string;

  @OneToMany(() => BoardList, (list) => list.board)
  lists: BoardList[];

  @OneToMany(() => BoardCard, (boardCard) => boardCard.board)
  cards: BoardCard[];

  @OneToMany(() => BoardMember, (boardMember) => boardMember.board)
  members: BoardMember[];
}
