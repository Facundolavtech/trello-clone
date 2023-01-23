import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Req, NotFoundException, BadRequestException, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthenticatedGuard } from '../../../../Auth/guards/auth.guard';
import { BoardMemberGuard } from '../../../guards/board-member.guard';
import { WithBoardRequest } from '../../../interfaces';
import { BoardService } from '../../../services/board.service';
import { BoardListService } from '../../List/services/list.service';
import { CreateCardDTO, HandleCardMemberDTO, UpdateCardDTO } from '../dto/card.dto';
import { BoardCardService } from '../services/card.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards')
export class BoardCardController {
  constructor(private boardCardService: BoardCardService, private boardService: BoardService, private boardListService: BoardListService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(@Req() req: WithBoardRequest, @Param('boardId') boardId: string, @Body() createDTO: CreateCardDTO) {
    const board = req.board;
    const user = req.user;

    const listById = await this.boardListService.findById(createDTO.listId);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    const cardExists = await this.boardCardService.findByQuery({
      title: createDTO.title,
      boardId,
    });

    if (cardExists) {
      throw new BadRequestException('A card with that title already exists');
    }

    const member = this.boardService.findBoardMember(board, user.id);

    return await this.boardCardService.create(boardId, member, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAll() {
    return await this.boardCardService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/lists/:listId')
  async getAllByList(@Param('listId') listId: string) {
    const listById = await this.boardListService.findById(listId);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    return this.boardCardService.findAllByListId(listId);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.boardCardService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id') id: string, @Param('boardId') boardId: string, @Body() updateDTO: UpdateCardDTO) {
    if (updateDTO.title) {
      const cardExists = await this.boardCardService.findByQuery({
        title: updateDTO.title,
        id,
        boardId,
      });

      if (cardExists) {
        throw new BadRequestException('A card with that title already exists');
      }
    } else {
      const cardById = await this.boardCardService.findById(id);

      if (!cardById) {
        throw new NotFoundException('The card does not exists');
      }
    }

    return await this.boardCardService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    return await this.boardCardService.delete(id);
  }

  @HttpCode(HttpStatus.OK)
  @Post(':id/members/add')
  async addMember(@Req() req: WithBoardRequest, @Param('id') id: string, @Body() handleMemberDTO: HandleCardMemberDTO) {
    const board = req.board;

    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const member = await this.boardService.findBoardMember(board, handleMemberDTO.userId);

    if (!member) {
      throw new BadRequestException('The user is not in the board');
    }

    const userIsCardMember = await this.boardCardService.userIsCardMember(cardById, member.id);

    if (userIsCardMember) {
      throw new BadRequestException('The user is already in the card');
    }

    return this.boardCardService.updateMembers(cardById, member, 'add');
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id/members/delete')
  async removeMember(@Req() req: WithBoardRequest, @Param('id') id: string, @Body() handleMemberDTO: HandleCardMemberDTO) {
    const board = req.board;

    const cardById = await this.boardCardService.findById(id);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const member = await this.boardService.findBoardMember(board, handleMemberDTO.userId);

    if (!member) {
      throw new BadRequestException('The user is not in the board');
    }

    const userIsCardMember = await this.boardCardService.userIsCardMember(cardById, member.id);

    if (!userIsCardMember) {
      throw new BadRequestException('The user is not in the card');
    }

    return this.boardCardService.updateMembers(cardById, member, 'delete');
  }
}
