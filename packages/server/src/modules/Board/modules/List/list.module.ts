import { Module } from '@nestjs/common';
import { BoardListController } from './controllers/list.controller';
import { EntitiesModule } from '../../../../common/entities/entities.module';
import { BoardListService } from './services/list.service';

@Module({
  imports: [EntitiesModule],
  controllers: [BoardListController],
  providers: [BoardListService],
  exports: [BoardListService],
})
export class BoardListModule {}
