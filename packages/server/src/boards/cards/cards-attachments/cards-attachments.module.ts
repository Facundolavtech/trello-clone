import { Module } from '@nestjs/common';
import { CardsAttachmentsService } from './cards-attachments.service';
import { CardsAttachmentsController } from './cards-attachments.controller';

@Module({
  controllers: [CardsAttachmentsController],
  providers: [CardsAttachmentsService]
})
export class CardsAttachmentsModule {}
