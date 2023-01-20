import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../common/entities/Base.entity';
import { BoardMember } from '../../../../../entities/BoardMember.entity';
import { BoardCard } from '../../../entities/Card.entity';

@Entity('BoardCardComment')
export class BoardCardComment extends BaseEntity {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => BoardCard, (card) => card.comments, {
    onDelete: 'CASCADE',
  })
  card: string;

  @ManyToOne(() => BoardMember, (boardMember) => boardMember.card_comments_authors, {
    onDelete: 'CASCADE',
  })
  author: string;
}
