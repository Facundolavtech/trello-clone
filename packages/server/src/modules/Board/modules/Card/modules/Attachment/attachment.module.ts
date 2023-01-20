import { Module } from '@nestjs/common';
import { CardAttachmentService } from './services/attachments.service';
import { EntitiesModule } from '../../../../../../common/entities/entities.module';
import { CardAttachmentController } from './controllers/attachment.controller';

@Module({
  imports: [EntitiesModule],
  controllers: [CardAttachmentController],
  providers: [CardAttachmentService],
  exports: [CardAttachmentService],
})
export class CardAttachmentModule {}
