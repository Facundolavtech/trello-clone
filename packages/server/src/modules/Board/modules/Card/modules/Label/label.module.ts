import { Module } from '@nestjs/common';
import { CardsLabelService } from './services/label.service';
import { CardsLabelController } from './controllers/label.controller';

@Module({
  imports: [],
  controllers: [CardsLabelController],
  providers: [CardsLabelService],
})
export class CardsLabelModule {}
