import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req, NotFoundException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { CustomUUIDPipe } from '../../../../../common/pipes/uuid.pipe';
import { AuthenticatedGuard } from '../../../../Auth/guards/auth.guard';
import { BoardMemberGuard } from '../../../guards/board-member.guard';
import { IWithBoardMemberRequest } from '../../../interfaces';
import { BoardMemberService } from '../../../services/board-member.service';
import { BoardListService } from '../../List/services/list.service';
import { CreateCardDTO, HandleCardMemberDTO, UpdateCardDTO } from '../dto/card.dto';
import { BoardCardService } from '../services/card.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards')
export class BoardCardController {
  constructor(private boardCardService: BoardCardService, private boardListService: BoardListService, private boardMemberService: BoardMemberService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(@Req() req: IWithBoardMemberRequest, @Param('boardId', CustomUUIDPipe) boardId: string, @Body() createDTO: CreateCardDTO) {
    const boardMember = req.member;

    const listById = await this.boardListService.findById(createDTO.listId);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    const cardByQuery = await this.boardCardService.findByQuery({
      listId: createDTO.listId,
      title: createDTO.title,
    });

    if (cardByQuery) {
      throw new BadRequestException('A card with that title already exists');
    }

    return await this.boardCardService.create(boardId, boardMember, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id', CustomUUIDPipe) id: string) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    return cardById;
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id', CustomUUIDPipe) id: string, @Body() updateDTO: UpdateCardDTO) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    if (cardById.title === updateDTO.title) {
      throw new BadRequestException('A card with that title already exists');
    }

    return await this.boardCardService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id', CustomUUIDPipe) id: string) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    return await this.boardCardService.delete(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id/members/add')
  async addMember(@Param('id', CustomUUIDPipe) id: string, @Param('boardId', CustomUUIDPipe) boardId: string, @Body() handleMemberDTO: HandleCardMemberDTO) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const boardMember = await this.boardMemberService.findOne(boardId, handleMemberDTO.userId);

    if (!boardMember) {
      throw new BadRequestException('The user is not in the board');
    }

    const userIsCardMember = await this.boardCardService.userIsCardMember(cardById, boardMember.id);

    if (userIsCardMember) {
      throw new BadRequestException('The user is already in the card');
    }

    return this.boardCardService.updateMembers(cardById, boardMember, 'add');
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id/members/delete')
  async deleteMember(@Param('id', CustomUUIDPipe) id: string, @Param('boardId', CustomUUIDPipe) boardId: string, @Body() handleMemberDTO: HandleCardMemberDTO) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const boardMember = await this.boardMemberService.findOne(boardId, handleMemberDTO.userId);

    if (!boardMember) {
      throw new BadRequestException('The user is not in the board');
    }

    const userIsCardMember = await this.boardCardService.userIsCardMember(cardById, boardMember.id);

    if (!userIsCardMember) {
      throw new BadRequestException('The user is not in the card');
    }

    return this.boardCardService.updateMembers(cardById, boardMember, 'delete');
  }
}
