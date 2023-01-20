import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { AuthGuard } from '@nestjs/passport';
import { AddCardMemberDto } from '../dto/add-member.dto';
import { RemoveCardMemberDto } from '../dto/remove-member.dto';
import { ListExistGuard } from '../guards/list-exists.guard';
import { BoardMemberGuard } from '../../../guards/board-member.guard';
import { BoardCardService } from '../services/card.service';

@Controller('cards/:boardId')
export class BoardCardController {
  constructor(private readonly boardCardService: BoardCardService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, ListExistGuard)
  @Post('create/:listId')
  create(@Request() req, @Param('listId') listId: string, @Param('boardId') boardId: string, @Body() createCardDto: CreateCardDto) {
    const userId = req.user.id;

    return this.boardCardService.create(boardId, listId, userId, createCardDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, ListExistGuard)
  @Get('findAll/:listId')
  findAll(@Param('listId') listId: string) {
    return this.boardCardService.findAll(listId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:cardId')
  findOne(@Param('cardId') cardId: string) {
    return this.boardCardService.findOne(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:cardId')
  update(@Param('cardId') cardId: string, @Body() updateCardDto: UpdateCardDto) {
    return this.boardCardService.update(cardId, updateCardDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:cardId')
  remove(@Param('cardId') cardId: string) {
    return this.boardCardService.remove(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('members/add/:cardId')
  addMember(@Param('cardId') cardId: string, @Body() addCardMemberDto: AddCardMemberDto) {
    return this.boardCardService.addMember(cardId, addCardMemberDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('members/delete/:cardId')
  deleteMember(@Param('cardId') cardId: string, @Body() removeCardMemberDto: RemoveCardMemberDto) {
    return this.boardCardService.deleteMember(cardId, removeCardMemberDto);
  }
}
