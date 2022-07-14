import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { User } from '../../../users/entities/user.entity';
import { List } from '../../lists/entities/list.entity';
import { CardAttachment } from './card-attachment.entity';
import { CardComment } from './card-comment.entity';
import { CardLabel } from './card-label.entity';

@Entity('card')
export class Card extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @ManyToMany(() => User, (user) => user.cards, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'card_members',
    joinColumn: {
      name: 'card_id',
    },
    inverseJoinColumn: {
      name: 'user_id',
    },
  })
  members: User[];

  @ManyToOne(() => List, (list) => list.cards, { onDelete: 'CASCADE' })
  list: List;

  @OneToMany(() => CardComment, (cardComment) => cardComment.card, {
    onDelete: 'CASCADE',
  })
  comments: CardComment[];

  @OneToMany(() => CardAttachment, (cardAttachment) => cardAttachment.card, {
    onDelete: 'CASCADE',
  })
  attachments: CardAttachment[];

  @OneToMany(() => CardLabel, (cardLabel) => cardLabel.card, {
    onDelete: 'CASCADE',
  })
  labels: CardLabel[];
}
