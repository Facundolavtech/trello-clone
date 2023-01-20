import { Module } from '@nestjs/common';
import { EntitiesModule } from '../../../../../../common/entities/entities.module';
import { CardCommentController } from './controllers/comment.controller';
import { CardCommentService } from './services/comment.service';

@Module({
  imports: [EntitiesModule],
  controllers: [CardCommentController],
  providers: [CardCommentService],
  exports: [CardCommentService],
})
export class CardCommentModule {}
