import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from '../../modules/Board/entities/Board.entity';
import { BoardMember } from '../../modules/Board/entities/BoardMember.entity';
import { BoardCard } from '../../modules/Board/modules/Card/entities/Card.entity';
import { BoardCardAttachment } from '../../modules/Board/modules/Card/modules/Attachment/entities/Attachment.entity';
import { BoardCardComment } from '../../modules/Board/modules/Card/modules/Comment/entities/Comment.entity';
import { BoardCardLabel } from '../../modules/Board/modules/Card/modules/Label/entities/Label.entity';
import { BoardList } from '../../modules/Board/modules/List/entities/BoardList.entity';
import { User } from '../../modules/User/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Board, BoardMember, BoardList, BoardCard, BoardCardAttachment, BoardCardComment, BoardCardLabel])],
  exports: [TypeOrmModule],
})
export class EntitiesModule {}
