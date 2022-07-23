import { Module } from '@nestjs/common';
import { CardsAttachmentsService } from './attachments.service';
import { CardsAttachmentsController } from './attachments.controller';

@Module({
  controllers: [CardsAttachmentsController],
  providers: [CardsAttachmentsService],
})
export class CardsAttachmentsModule {}
