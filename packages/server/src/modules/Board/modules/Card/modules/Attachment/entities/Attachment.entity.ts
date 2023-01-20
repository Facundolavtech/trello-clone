import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../common/entities/Base.entity';
import { BoardCard } from '../../../entities/Card.entity';

@Entity('BoardCardAttachment')
export class BoardCardAttachment extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  type: string;

  @ManyToOne(() => BoardCard, (card) => card.attachments, {
    onDelete: 'CASCADE',
  })
  card: string;
}
