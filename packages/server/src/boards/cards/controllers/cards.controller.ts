import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
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
    @Request() req,
    @Param('listId') listId: string,
    @Param('boardId') boardId: string,
    @Body() createCardDto: CreateCardDto,
  ) {
    const userId = req.user.id;

    return this.cardsService.create(boardId, listId, userId, createCardDto);
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

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:cardId/:boardId')
  update(@Param('cardId') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:cardId/:boardId')
  remove(@Param('cardId') id: string) {
    return this.cardsService.remove(id);
  }
}
