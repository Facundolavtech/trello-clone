import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../../common/entities/Base.entity';
import { Board } from '../../../entities/Board.entity';
import { BoardMember } from '../../../entities/BoardMember.entity';
import { BoardList } from '../../List/entities/BoardList.entity';
import { BoardCardAttachment } from '../modules/Attachment/entities/Attachment.entity';
import { BoardCardComment } from '../modules/Comment/entities/Comment.entity';
import { BoardCardLabel } from '../modules/Label/entities/Label.entity';

@Entity('BoardCard')
export class BoardCard extends BaseEntity {
  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @ManyToMany(() => BoardMember, (boardMember) => boardMember.cards)
  @JoinTable({
    name: 'BoardCardMember',
    joinColumn: {
      name: 'card_id',
    },
    inverseJoinColumn: {
      name: 'member_id',
    },
  })
  members: BoardMember[];

  @ManyToOne(() => BoardList, (list) => list.cards, {
    onDelete: 'CASCADE',
  })
  list: string;

  @ManyToOne(() => Board, (board) => board.cards, {
    onDelete: 'CASCADE',
  })
  board: string;

  @OneToMany(() => BoardCardComment, (cardComment) => cardComment.card, {
    onDelete: 'CASCADE',
  })
  comments: BoardCardComment[];

  @OneToMany(() => BoardCardAttachment, (cardAttachment) => cardAttachment.card, {
    onDelete: 'CASCADE',
  })
  attachments: BoardCardAttachment[];

  @OneToMany(() => BoardCardLabel, (cardLabel) => cardLabel.card, {
    onDelete: 'CASCADE',
  })
  labels: BoardCardLabel[];
}
