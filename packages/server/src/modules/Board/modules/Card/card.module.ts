import { Module } from '@nestjs/common';
import { CardAttachmentModule } from './modules/Attachment/attachment.module';
import { BoardCardController } from './controllers/card.controller';
import { BoardCardService } from './services/card.service';
import { CardsLabelModule } from './modules/Label/label.module';
import { CardCommentModule } from './modules/Comment/comment.module';
import { EntitiesModule } from '../../../../common/entities/entities.module';

@Module({
  imports: [EntitiesModule, CardAttachmentModule, CardsLabelModule, CardCommentModule],
  controllers: [BoardCardController],
  providers: [BoardCardService],
  exports: [BoardCardService],
})
export class BoardCardModule {}
