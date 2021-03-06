import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateCardsLabelDto } from './create-label.dto';

export class UpdateCardsLabelDto extends PartialType(CreateCardsLabelDto) {
  @IsOptional()
  name: string;

  @IsOptional()
  color: string;
}
