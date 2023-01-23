import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../common/entities/Base.entity';
import { BoardMember } from '../../../../../entities/BoardMember.entity';
import { BoardCard } from '../../../entities/Card.entity';

@Entity('BoardCardComment')
export class BoardCardComment extends BaseEntity {
  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => BoardMember, (boardMember) => boardMember.board_member_card_comments, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
  @JoinColumn({ name: 'authorId' })
  author: BoardMember;

  @Column()
  authorId: string;

  @ManyToOne(() => BoardCard, (card) => card.comments, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'cardId' })
  card: BoardCard;

  @Column()
  cardId: string;
}
