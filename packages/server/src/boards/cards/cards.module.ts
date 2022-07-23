import { Module } from '@nestjs/common';
import { CardsService } from './services/cards.service';
import { CardsController } from './controllers/cards.controller';
import { CardAttachment } from './attachments/entities/attachment.entity';
import { CardComment } from './comments/entities/comment.entity';
import { CardLabel } from './labels/entities/label.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '../lists/entities/list.entity';
import { Card } from './entities/card.entity';
import { Board } from '../entities/board.entity';
import { User } from '../../users/entities/user.entity';
import { CardsAttachmentsModule } from './attachments/attachments.module';
import { CardsCommentsModule } from './comments/comments.module';
import { CardsLabelModule } from './labels/label.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Board,
      User,
      List,
      Card,
      CardAttachment,
      CardComment,
      CardLabel,
    ]),
    CardsAttachmentsModule,
    CardsLabelModule,
    CardsCommentsModule,
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
