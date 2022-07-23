import { PartialType } from '@nestjs/swagger';
import { CreateCardsCommentDto } from './create-comment.dto';

export class UpdateCardsCommentDto extends PartialType(CreateCardsCommentDto) {}
