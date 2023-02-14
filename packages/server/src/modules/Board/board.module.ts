import { Module } from '@nestjs/common';
import { BoardService } from './services/board.service';
import { BoardController } from './controllers/board.controller';
import { EntitiesModule } from '../../common/entities/entities.module';
import { BoardListController } from './modules/List/controllers/list.controller';
import { BoardCardController } from './modules/Card/controllers/card.controller';
import { CardAttachmentController } from './modules/Card/modules/Attachment/controllers/attachment.controller';
import { CardCommentController } from './modules/Card/modules/Comment/controllers/comment.controller';
import { CardLabelController } from './modules/Card/modules/Label/controllers/label.controller';
import { BoardCardService } from './modules/Card/services/card.service';
import { BoardListService } from './modules/List/services/list.service';
import { CardAttachmentService } from './modules/Card/modules/Attachment/services/attachments.service';
import { CardCommentService } from './modules/Card/modules/Comment/services/comment.service';
import { CardLabelService } from './modules/Card/modules/Label/services/label.service';
import { UserModule } from '../User/user.module';
import { BoardMemberService } from './services/board-member.service';
import { BoardMemberController } from './controllers/board-member.controller';

@Module({
  imports: [EntitiesModule, UserModule],
  controllers: [
    BoardController,
    BoardListController,
    BoardCardController,
    CardAttachmentController,
    CardCommentController,
    CardLabelController,
    BoardMemberController,
  ],
  providers: [BoardService, BoardCardService, BoardListService, CardAttachmentService, CardCommentService, CardLabelService, BoardMemberService],
  exports: [BoardService, BoardCardService, BoardListService, CardAttachmentService, CardCommentService, CardLabelService, BoardMemberService],
})
export class BoardModule {}
