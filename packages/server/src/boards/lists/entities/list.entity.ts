import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../../entities/board.entity';

@Entity('list')
export class List {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Board, (board) => board.lists)
  board: string;
}
