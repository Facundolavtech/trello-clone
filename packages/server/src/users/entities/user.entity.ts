import { Entity, Column, ManyToMany } from 'typeorm';
import { Card } from '../../boards/cards/entities/card.entity';
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

  @ManyToMany(() => Board, (board) => board.members, { onDelete: 'CASCADE' })
  boards: Board[];

  @ManyToMany(() => Board, (board) => board.admins, { onDelete: 'CASCADE' })
  admins: Board[];

  @ManyToMany(() => Card, (card) => card.members, { onDelete: 'CASCADE' })
  cards: Card[];
}
