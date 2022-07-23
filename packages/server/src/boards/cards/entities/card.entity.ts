import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { Board } from '../../entities/board.entity';
import { List } from '../../lists/entities/list.entity';
import { CardAttachment } from '../attachments/entities/attachment.entity';
import { CardComment } from '../comments/entities/comment.entity';
import { CardLabel } from '../labels/entities/label.entity';

@Entity('card')
export class Card extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @ManyToOne(() => List, (list) => list.cards, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  list: string;

  @ManyToOne(() => Board, (board) => board.cards, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  board: string;

  @OneToMany(() => CardComment, (cardComment) => cardComment.card, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  comments: CardComment[];

  @OneToMany(() => CardAttachment, (cardAttachment) => cardAttachment.card, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  attachments: CardAttachment[];

  @OneToMany(() => CardLabel, (cardLabel) => cardLabel.card, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  labels: CardLabel[];
}
