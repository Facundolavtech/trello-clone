import { Module } from '@nestjs/common';
import { CardsCommentsService } from './comments.service';
import { CardsCommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../entities/card.entity';
import { CardComment } from './entities/comment.entity';
import { Board } from '../../entities/board.entity';
import { BoardMember } from '../../entities/board-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardComment, Card, Board, BoardMember])],
  controllers: [CardsCommentsController],
  providers: [CardsCommentsService],
})
export class CardsCommentsModule {}
