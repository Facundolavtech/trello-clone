import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsAttachmentsService } from './cards-attachments.service';
import { CreateCardsAttachmentDto } from './dto/create-cards-attachment.dto';
import { UpdateCardsAttachmentDto } from './dto/update-cards-attachment.dto';

@Controller('cards-attachments')
export class CardsAttachmentsController {
  constructor(private readonly cardsAttachmentsService: CardsAttachmentsService) {}

  @Post()
  create(@Body() createCardsAttachmentDto: CreateCardsAttachmentDto) {
    return this.cardsAttachmentsService.create(createCardsAttachmentDto);
  }

  @Get()
  findAll() {
    return this.cardsAttachmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsAttachmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardsAttachmentDto: UpdateCardsAttachmentDto) {
    return this.cardsAttachmentsService.update(+id, updateCardsAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsAttachmentsService.remove(+id);
  }
}
