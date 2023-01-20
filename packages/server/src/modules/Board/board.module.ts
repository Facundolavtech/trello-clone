import { Module } from '@nestjs/common';
import { BoardService } from './services/board.service';
import { BoardController } from './controllers/board.controller';
import { EntitiesModule } from '../../common/entities/entities.module';
import { BoardListModule } from './modules/List/list.module';
import { BoardCardModule } from './modules/Card/card.module';

@Module({
  imports: [EntitiesModule, BoardListModule, BoardCardModule],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [BoardService],
})
export class BoardModule {}
