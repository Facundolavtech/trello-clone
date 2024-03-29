import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../../../../common/entities/Base.entity';
import capitalizeFirstLetter from '../../../../../../../utils/capitalizeFirstLetter';
import { BoardCard } from '../../../entities/Card.entity';

@Entity('BoardCardLabel')
export class BoardCardLabel extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  color: string;

  @ManyToOne(() => BoardCard, (card) => card.labels, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cardId' })
  card: BoardCard;

  @Column()
  cardId: string;

  @BeforeInsert()
  formatName() {
    this.name = capitalizeFirstLetter(this.name);
  }
}
