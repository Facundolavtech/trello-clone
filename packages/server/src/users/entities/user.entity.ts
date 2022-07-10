import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Board } from '../../boards/entities/board.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @ManyToMany(() => Board, (board) => board.members)
  boards: Board[];

  @ManyToMany(() => Board, (board) => board.admins)
  admins: Board[];
}
