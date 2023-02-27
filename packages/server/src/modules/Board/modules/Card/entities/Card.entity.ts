import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../../common/entities/Base.entity';
import { Board } from '../../../entities/Board.entity';
import { BoardMember } from '../../../entities/BoardMember.entity';
import { BoardList } from '../../List/entities/BoardList.entity';
import { BoardCardAttachment } from '../modules/Attachment/entities/Attachment.entity';
import { BoardCardComment } from '../modules/Comment/entities/Comment.entity';
import { BoardCardLabel } from '../modules/Label/entities/Label.entity';

@Entity('BoardCard')
export class BoardCard extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: true, default: null })
  description: string;

  @Column({ nullable: true, default: null })
  cover: string;

  @ManyToOne(() => Board, (board) => board.cards, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
  board: Board;

  @Column()
  boardId: string;

  @ManyToOne(() => BoardList, (list) => list.cards, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'listId' })
  list: BoardList;

  @Column()
  listId: string;

  @OneToMany(() => BoardCardAttachment, (cardAttachment) => cardAttachment.card, { eager: true })
  attachments: BoardCardAttachment[];

  @OneToMany(() => BoardCardLabel, (cardLabel) => cardLabel.card, { eager: true })
  labels: BoardCardLabel[];

  @OneToMany(() => BoardCardComment, (boardCardComment) => boardCardComment.card, { eager: true })
  comments: BoardCardComment[];

  @ManyToMany(() => BoardMember, (boardMember) => boardMember.board_member_cards, { onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
  @JoinTable({
    name: 'BoardCardMember',
    joinColumn: { name: 'cardId' },
    inverseJoinColumn: { name: 'memberId' },
  })
  members: BoardMember[];
}
