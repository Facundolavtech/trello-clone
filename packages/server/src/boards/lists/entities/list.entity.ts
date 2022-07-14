import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { Card } from '../../cards/entities/card.entity';
import { Board } from '../../entities/board.entity';

@Entity('list')
export class List extends BaseEntity {
  @Column({ nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Board, (board) => board.lists, {
    onDelete: 'CASCADE',
  })
  board: string;

  @OneToMany(() => Card, (card) => card.list, {
    onDelete: 'CASCADE',
  })
  cards: Card[];
}
