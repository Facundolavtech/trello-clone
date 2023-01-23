import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, BadRequestException, NotFoundException } from '@nestjs/common';
import { CardLabelService } from '../services/label.service';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { CreateCardLabelDTO, UpdateCardLabelDTO } from '../dto/label.dto';
import { AuthenticatedGuard } from '../../../../../../Auth/guards/auth.guard';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards/:cardId/labels')
export class CardLabelController {
  constructor(private readonly cardLabelService: CardLabelService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(@Param('cardId') cardId: string, @Body() createDTO: CreateCardLabelDTO) {
    const labelByName = await this.cardLabelService.findByName(createDTO.name);

    if (labelByName) {
      throw new BadRequestException('A label already exist with that name');
    }

    return this.cardLabelService.create(cardId, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll(@Param('cardId') cardId: string) {
    return this.cardLabelService.findAll(cardId);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.cardLabelService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateDTO: UpdateCardLabelDTO) {
    const labelById = await this.cardLabelService.findById(id);

    if (!labelById) {
      throw new NotFoundException('The label does not exists');
    }

    return await this.cardLabelService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    const labelById = await this.cardLabelService.findById(id);

    if (!labelById) {
      throw new NotFoundException('The label does not exists');
    }

    return await this.cardLabelService.delete(id);
  }
}
