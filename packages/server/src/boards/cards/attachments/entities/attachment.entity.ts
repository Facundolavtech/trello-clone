import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../core/base.entity';
import { Card } from '../../entities/card.entity';

@Entity('card_attachment')
export class CardAttachment extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  url: string;

  @Column({ nullable: false })
  type: string;

  @ManyToOne(() => Card, (card) => card.attachments, {
    onDelete: 'CASCADE',
  })
  card: string;
}
