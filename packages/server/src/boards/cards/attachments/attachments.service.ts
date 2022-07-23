import { Injectable } from '@nestjs/common';
import { CreateCardsAttachmentDto } from './dto/create-attachment.dto';
import { UpdateCardsAttachmentDto } from './dto/update-attachment.dto';

@Injectable()
export class CardsAttachmentsService {
  create(createCardsAttachmentDto: CreateCardsAttachmentDto) {
    return 'This action adds a new cardsAttachment';
  }

  findAll() {
    return `This action returns all cardsAttachments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cardsAttachment`;
  }

  update(id: number, updateCardsAttachmentDto: UpdateCardsAttachmentDto) {
    return `This action updates a #${id} cardsAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} cardsAttachment`;
  }
}
