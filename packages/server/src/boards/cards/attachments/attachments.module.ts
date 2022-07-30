import { Module } from '@nestjs/common';
import { CardsAttachmentsService } from './attachments.service';
import { CardsAttachmentsController } from './attachments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardAttachment } from './entities/attachment.entity';
import { Board } from '../../entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardAttachment, Board])],
  controllers: [CardsAttachmentsController],
  providers: [CardsAttachmentsService],
})
export class CardsAttachmentsModule {}
