import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { Board } from '../entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, List]), ListsModule],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
