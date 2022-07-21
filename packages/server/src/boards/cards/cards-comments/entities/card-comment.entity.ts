import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../core/base.entity';
import { User } from '../../../../users/entities/user.entity';
import { Card } from '../../entities/card.entity';

@Entity('card-comment')
export class CardComment extends BaseEntity {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => User, (user) => user.cardComments, {
    onDelete: 'CASCADE',
  })
  author: User;

  @ManyToOne(() => Card, (card) => card.comments, {
    onDelete: 'CASCADE',
  })
  card: string;
}