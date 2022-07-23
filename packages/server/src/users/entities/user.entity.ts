import { Entity, Column, ManyToMany, OneToMany } from 'typeorm';
import { CardComment } from '../../boards/cards/cards-comments/entities/card-comment.entity';
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

  @ManyToMany(() => Board, (board) => board.members, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user_board_members: Board[];

  @ManyToMany(() => Board, (board) => board.admins, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user_boards_admins: Board[];

  @OneToMany(() => CardComment, (cardComment) => cardComment.author, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user_card_comments_author: CardComment[];
}
