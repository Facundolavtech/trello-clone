import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../core/base.entity';
import { User } from '../../../../users/entities/user.entity';
import { Card } from '../../entities/card.entity';

@Entity('card_comment')
export class CardComment extends BaseEntity {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => User, (user) => user.user_card_comments_author, {
    onDelete: 'CASCADE',
  })
  author: User;

  @ManyToOne(() => Card, (card) => card.comments, {
    onDelete: 'CASCADE',
  })
  card: string;
}
