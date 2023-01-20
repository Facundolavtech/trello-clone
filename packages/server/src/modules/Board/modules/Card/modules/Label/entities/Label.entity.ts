import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../common/entities/Base.entity';
import { BoardCard } from '../../../entities/Card.entity';

@Entity('BoardCardLabel')
export class BoardCardLabel extends BaseEntity {
  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  color: string;

  @ManyToOne(() => BoardCard, (card) => card.labels, {
    onDelete: 'CASCADE',
  })
  card: string;
}
