import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CardsService } from '../services/cards.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { BoardMemberGuard } from '../../guards/board-member.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create/:boardId/:listId')
  create(
    @Req() req,
    @Param('listId') listId: string,
    @Body() createCardDto: CreateCardDto,
  ) {
    const { userId } = req.user;

    return this.cardsService.create(listId, createCardDto, userId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll/:boardId/:listId')
  findAll(@Param('listId') listId: string) {
    return this.cardsService.findAll(listId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:cardId/:boardId')
  findOne(@Param('cardId') cardId: string) {
    return this.cardsService.findOne(cardId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}
