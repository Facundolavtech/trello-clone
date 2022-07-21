import { PartialType } from '@nestjs/swagger';
import { CreateCardsAttachmentDto } from './create-cards-attachment.dto';

export class UpdateCardsAttachmentDto extends PartialType(CreateCardsAttachmentDto) {}
