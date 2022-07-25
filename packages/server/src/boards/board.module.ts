import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { User } from '../users/entities/user.entity';
import { ListsModule } from './lists/lists.module';
import { List } from './lists/entities/list.entity';
import { CardsModule } from './cards/cards.module';
import { Card } from './cards/entities/card.entity';
import { BoardMember } from './entities/board-member.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board, User, List, Card, BoardMember]),
    ListsModule,
    CardsModule,
  ],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [TypeOrmModule],
})
export class BoardModule {}
