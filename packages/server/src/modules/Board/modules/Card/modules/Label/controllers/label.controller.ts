import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CardLabelService } from '../services/label.service';
import { CreateCardsLabelDto } from '../dto/create-label.dto';
import { UpdateCardsLabelDto } from '../dto/update-label.dto';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';

@Controller('cards/labels/:cardId/:boardId')
export class CardLabelController {
  constructor(private readonly cardLabelService: CardLabelService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create')
  create(@Param('cardId') cardId: string, @Body() createCardsLabelDto: CreateCardsLabelDto) {
    return this.cardLabelService.create(cardId, createCardsLabelDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll')
  findAll(@Param('cardId') cardId: string) {
    return this.cardLabelService.findAll(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:labelId')
  findOne(@Param('labelId') labelId: string) {
    return this.cardLabelService.findOne(labelId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:labelId')
  update(@Param('labelId') labelId: string, @Body() updateCardsLabelDto: UpdateCardsLabelDto) {
    return this.cardLabelService.update(labelId, updateCardsLabelDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:labelId')
  remove(@Param('labelId') labelId: string) {
    return this.cardLabelService.remove(labelId);
  }
}
