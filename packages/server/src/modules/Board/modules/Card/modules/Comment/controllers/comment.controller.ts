import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, Req, NotFoundException } from '@nestjs/common';
import { CustomUUIDPipe } from '../../../../../../../common/pipes/uuid.pipe';
import { AuthenticatedGuard } from '../../../../../../Auth/guards/auth.guard';
import { BoardExistGuard } from '../../../../../guards/board-exist.guard';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { IWithBoardMemberRequest } from '../../../../../interfaces';
import { BoardService } from '../../../../../services/board.service';
import { BoardCardService } from '../../../services/card.service';
import { CreateCardCommentDTO, UpdateCardCommentDTO } from '../dto/comment.dto';
import { CommentAuthorGuard } from '../guards/comment-author.guard';
import { CardCommentService } from '../services/comment.service';

@UseGuards(AuthenticatedGuard, BoardExistGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards/:cardId/comments')
export class CardCommentController {
  constructor(private readonly cardCommentService: CardCommentService, private cardService: BoardCardService, private boardService: BoardService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(@Req() req: IWithBoardMemberRequest, @Param('cardId', CustomUUIDPipe) cardId: string, @Body() createDTO: CreateCardCommentDTO) {
    const member = req.member;

    const cardById = await this.cardService.findById(cardId);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    return await this.cardCommentService.create(cardId, member.id, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', CustomUUIDPipe) id: string) {
    const commentById = await this.cardCommentService.findById(id);

    if (!commentById) {
      throw new NotFoundException('The comment does not exists');
    }

    return commentById;
  }

  @UseGuards(CommentAuthorGuard)
  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id', CustomUUIDPipe) id: string, @Body() updateDTO: UpdateCardCommentDTO) {
    return await this.cardCommentService.update(id, updateDTO);
  }

  @UseGuards(CommentAuthorGuard)
  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async remove(@Param('id', CustomUUIDPipe) id: string) {
    return await this.cardCommentService.delete(id);
  }
}
