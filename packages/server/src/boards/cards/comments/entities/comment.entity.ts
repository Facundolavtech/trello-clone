import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../core/base.entity';
import { BoardMember } from '../../../entities/board-member.entity';
import { Card } from '../../entities/card.entity';

@Entity('card_comment')
export class CardComment extends BaseEntity {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => Card, (card) => card.comments, {
    onDelete: 'CASCADE',
  })
  card: string;

  @ManyToOne(
    () => BoardMember,
    (boardMember) => boardMember.card_comments_authors,
    {
      onDelete: 'CASCADE',
    },
  )
  author: string;
}
