import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../../common/entities/Base.entity';
import { Board } from '../../../entities/Board.entity';
import { BoardCard } from '../../Card/entities/Card.entity';

@Entity('BoardList')
export class BoardList extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => Board, (board) => board.lists, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'boardId' })
  board: string;

  @Column()
  boardId: string;

  @OneToMany(() => BoardCard, (card) => card.list)
  cards: BoardCard[];
}
