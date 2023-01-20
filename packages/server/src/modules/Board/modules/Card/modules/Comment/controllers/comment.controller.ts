import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { CreateBoardCardCommentDTO } from '../dto/create.dto';
import { UpdateBoardCardCommentDTO } from '../dto/update.dto';

import { CardCommentAuthorGuard } from '../guards/comment-author.guard';
import { CardCommentService } from '../services/comment.service';

@Controller('cards/comments/:cardId/:boardId')
export class CardCommentController {
  constructor(private readonly cardCommentService: CardCommentService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create')
  create(@Request() req, @Param('cardId') cardId: string, @Body() createDTO: CreateBoardCardCommentDTO) {
    const userId: string = req.user.id;

    return this.cardCommentService.create(cardId, userId, createDTO);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll')
  findAll(@Param('cardId') cardId: string) {
    return this.cardCommentService.findAll(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:commentId')
  findOne(@Param('commentId') commentId: string) {
    return this.cardCommentService.findOne(commentId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, CardCommentAuthorGuard)
  @Put('update/:commentId')
  update(@Param('commentId') commentId: string, @Body() updateDTO: UpdateBoardCardCommentDTO) {
    return this.cardCommentService.update(commentId, updateDTO);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, CardCommentAuthorGuard)
  @Delete('delete/:commentId')
  remove(@Param('commentId') commentId: string) {
    return this.cardCommentService.remove(commentId);
  }
}
