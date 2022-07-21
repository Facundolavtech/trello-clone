import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardMemberGuard } from '../../guards/board-member.guard';
import { CardsCommentsService } from './cards-comments.service';
import { CreateCardsCommentDto } from './dto/create-cards-comment.dto';
import { UpdateCardsCommentDto } from './dto/update-cards-comment.dto';
import { CardCommentAuthorGuard } from './guards/author.guard';

@Controller('cards/comments/:cardId/:boardId')
export class CardsCommentsController {
  constructor(private readonly cardsCommentsService: CardsCommentsService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create')
  create(
    @Request() req,
    @Param('cardId') cardId: string,
    @Body() createCardsCommentDto: CreateCardsCommentDto,
  ) {
    const userId: string = req.user.id;

    return this.cardsCommentsService.create(
      cardId,
      userId,
      createCardsCommentDto,
    );
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll')
  findAll(@Param('cardId') cardId: string) {
    return this.cardsCommentsService.findAll(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:commentId')
  findOne(@Param('commentId') commentId: string) {
    return this.cardsCommentsService.findOne(commentId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, CardCommentAuthorGuard)
  @Put('update/:commentId')
  update(
    @Param('commentId') commentId: string,
    @Body() updateCardsCommentDto: UpdateCardsCommentDto,
  ) {
    return this.cardsCommentsService.update(commentId, updateCardsCommentDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard, CardCommentAuthorGuard)
  @Delete('delete/:commentId')
  remove(@Param('commentId') commentId: string) {
    return this.cardsCommentsService.remove(commentId);
  }
}
