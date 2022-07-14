import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { Card } from './card.entity';

@Entity('card-label')
export class CardLabel extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  color: string;

  @ManyToOne(() => Card, (card) => card.labels, {
    onDelete: 'CASCADE',
  })
  card: string;
}
