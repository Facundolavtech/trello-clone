import { Module } from '@nestjs/common';
import { CardsService } from './services/cards.service';
import { CardsController } from './controllers/cards.controller';
import { CardAttachment } from './cards-attachments/entities/card-attachment.entity';
import { CardComment } from './cards-comments/entities/card-comment.entity';
import { CardLabel } from './cards-label/entities/card-label.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '../lists/entities/list.entity';
import { Card } from './entities/card.entity';
import { Board } from '../entities/board.entity';
import { User } from '../../users/entities/user.entity';
import { CardsAttachmentsModule } from './cards-attachments/cards-attachments.module';
import { CardsCommentsModule } from './cards-comments/cards-comments.module';
import { CardsLabelModule } from './cards-label/cards-label.module';

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
