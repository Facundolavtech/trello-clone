import { PartialType } from '@nestjs/swagger';
import { CreateCardsAttachmentDto } from './create-attachment.dto';

export class UpdateCardsAttachmentDto extends PartialType(
  CreateCardsAttachmentDto,
) {}
