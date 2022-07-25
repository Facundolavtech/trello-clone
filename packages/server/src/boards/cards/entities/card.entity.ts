import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '../../../core/base.entity';
import { BoardMember } from '../../entities/board-member.entity';
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

  @ManyToMany(() => BoardMember, (boardMember) => boardMember.cards)
  @JoinTable({
    name: 'card_members',
    joinColumn: {
      name: 'card_id',
    },
    inverseJoinColumn: {
      name: 'member_id',
    },
  })
  members: BoardMember[];

  @ManyToOne(() => List, (list) => list.cards, {
    onDelete: 'CASCADE',
  })
  list: string;

  @ManyToOne(() => Board, (board) => board.cards, {
    onDelete: 'CASCADE',
  })
  board: string;

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
