import { Module } from '@nestjs/common';
import { CardsLabelService } from './label.service';
import { CardsLabelController } from './label.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardLabel } from './entities/label.entity';
import { Card } from '../entities/card.entity';
import { Board } from '../../entities/board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card, CardLabel, Board])],
  controllers: [CardsLabelController],
  providers: [CardsLabelService],
})
export class CardsLabelModule {}
