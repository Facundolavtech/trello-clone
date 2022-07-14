import { Module } from '@nestjs/common';
import { CardsService } from './services/cards.service';
import { CardsController } from './controllers/cards.controller';
import { CardAttachment } from './entities/card-attachment.entity';
import { CardComment } from './entities/card-comment.entity';
import { CardLabel } from './entities/card-label.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '../lists/entities/list.entity';
import { Card } from './entities/card.entity';
import { Board } from '../entities/board.entity';
import { User } from '../../users/entities/user.entity';

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
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
