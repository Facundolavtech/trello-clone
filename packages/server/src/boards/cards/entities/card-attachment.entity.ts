import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { Card } from './card.entity';

@Entity('card-attachment')
export class CardAttachment extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  url: string;

  @ManyToOne(() => Card, (card) => card.attachments, {
    onDelete: 'CASCADE',
  })
  card: string;
}
