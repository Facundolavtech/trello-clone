import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../../common/entities/Base.entity';
import { Board } from '../../../entities/Board.entity';
import { BoardCard } from '../../Card/entities/Card.entity';

@Entity('BoardList')
export class BoardList extends BaseEntity {
  @Column({ nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Board, (board) => board.lists, {
    onDelete: 'CASCADE',
  })
  board: string;

  @OneToMany(() => BoardCard, (card) => card.list, {
    onDelete: 'CASCADE',
  })
  cards: BoardCard[];
}
