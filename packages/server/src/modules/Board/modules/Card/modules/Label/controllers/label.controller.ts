import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { CardLabelService } from '../services/label.service';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { CreateCardLabelDTO, UpdateCardLabelDTO } from '../dto/label.dto';
import { AuthenticatedGuard } from '../../../../../../Auth/guards/auth.guard';
import { BoardCardService } from '../../../services/card.service';
import { CustomUUIDPipe } from '../../../../../../../common/pipes/uuid.pipe';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards/:cardId/labels')
export class CardLabelController {
  constructor(private cardLabelService: CardLabelService, private boardCardService: BoardCardService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(@Param('cardId', CustomUUIDPipe) cardId: string, @Body() createDTO: CreateCardLabelDTO) {
    const cardById = await this.boardCardService.findById(cardId);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const labelByQuery = await this.cardLabelService.findOneByQuery({
      name: createDTO.name,
      cardId,
    });

    if (labelByQuery) {
      throw new BadRequestException('A label already exist with that name');
    }

    return this.cardLabelService.create(cardId, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id', CustomUUIDPipe) id: string) {
    const labelById = await this.cardLabelService.findById(id);

    if (!labelById) {
      throw new NotFoundException('The label does not exists');
    }

    return labelById;
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id', CustomUUIDPipe) id: string, @Body() updateDTO: UpdateCardLabelDTO) {
    const labelById = await this.cardLabelService.findById(id);

    if (!labelById) {
      throw new NotFoundException('The label does not exists');
    }

    if (labelById.name === updateDTO.name) {
      throw new BadRequestException('A label with that name already exists');
    }

    return await this.cardLabelService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id', CustomUUIDPipe) id: string) {
    const labelById = await this.cardLabelService.findById(id);

    if (!labelById) {
      throw new NotFoundException('The label does not exists');
    }

    return await this.cardLabelService.delete(id);
  }
}
