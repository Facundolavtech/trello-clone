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
import { AddCardMemberDto } from '../dto/add-member.dto';
import { RemoveCardMemberDto } from '../dto/remove-member.dto';

@Controller('cards/:boardId')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create/:listId')
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
  @Get('findAll/:listId')
  findAll(@Param('listId') listId: string) {
    return this.cardsService.findAll(listId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:cardId')
  findOne(@Param('cardId') cardId: string) {
    return this.cardsService.findOne(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:cardId')
  update(
    @Param('cardId') cardId: string,
    @Body() updateCardDto: UpdateCardDto,
  ) {
    return this.cardsService.update(cardId, updateCardDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:cardId')
  remove(@Param('cardId') cardId: string) {
    return this.cardsService.remove(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('members/add/:cardId')
  addMember(
    @Param('cardId') cardId: string,
    @Body() addCardMemberDto: AddCardMemberDto,
  ) {
    return this.cardsService.addMember(cardId, addCardMemberDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('members/delete/:cardId')
  deleteMember(
    @Param('cardId') cardId: string,
    @Body() removeCardMemberDto: RemoveCardMemberDto,
  ) {
    return this.cardsService.deleteMember(cardId, removeCardMemberDto);
  }
}
