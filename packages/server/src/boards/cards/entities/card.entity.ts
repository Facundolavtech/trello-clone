import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../../users/entities/user.entity';

@Entity('card')
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column()
  description: string;

  @Column()
  cover: string;

  list: string;

  members: User[];

  //   comments: CardComment[];

  //   attachments: CardAttachment[];

  //   labels: CardLabel[];
}
