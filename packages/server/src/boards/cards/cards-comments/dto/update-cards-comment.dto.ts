import { PartialType } from '@nestjs/swagger';
import { CreateCardsCommentDto } from './create-cards-comment.dto';

export class UpdateCardsCommentDto extends PartialType(CreateCardsCommentDto) {}
