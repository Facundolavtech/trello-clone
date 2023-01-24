import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, Query, BadRequestException, Req, NotFoundException } from '@nestjs/common';
import { BoardService } from '../services/board.service';
import { AuthenticatedGuard } from '../../Auth/guards/auth.guard';
import { UserService } from '../../user/services/user.service';
import { AuthenticatedRequest } from '../../../common/types';
import { CreateBoardDTO } from '../dto/create.dto';
import { HandleBoardMemberDTO, UpdateBoardDTO } from '../dto/update.dto';
import { BoardAdminGuard } from '../guards/board-admin.guard';
import { WithBoardRequest } from '../interfaces';
import { BoardMemberGuard } from '../guards/board-member.guard';

@UseGuards(AuthenticatedGuard)
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService, private userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticatedGuard)
  @Post('create')
  async create(@Req() req: AuthenticatedRequest, @Body() createDTO: CreateBoardDTO) {
    const user = req.user;

    const boardByTitle = await this.boardService.findByTitle(createDTO.title);

    if (boardByTitle) {
      throw new BadRequestException('Already board exists with same title');
    }

    return await this.boardService.create(createDTO, user);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query('isPrivate') isPrivate?: boolean) {
    return await this.boardService.findAllWithRelations(isPrivate, ['members', 'members.user', 'admin']);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const boardById = this.boardService.findByIdWithRelations(id, ['members', 'cards', 'cards.labels', 'cards.attachments', 'cards.members', 'cards.comments']);

    if (!boardById) {
      throw new NotFoundException('The board does not exists');
    }

    return boardById;
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(BoardMemberGuard, BoardAdminGuard)
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateDTO: UpdateBoardDTO) {
    return this.boardService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(BoardMemberGuard, BoardAdminGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return await this.boardService.delete(id);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(BoardMemberGuard, BoardAdminGuard)
  @Post(':id/members/add')
  async addMember(@Req() req: WithBoardRequest, @Body() handleMemberDTO: HandleBoardMemberDTO) {
    const board = req.board;
    const user = req.user;

    if (user.id === handleMemberDTO.userId) {
      throw new BadRequestException("You can't add yourself to board");
    }

    const userById = await this.userService.findById(handleMemberDTO.userId);

    if (!userById) {
      throw new NotFoundException('The user does not exists');
    }

    const userIsBoardMember = this.boardService.userIsBoardMember(board, handleMemberDTO.userId);

    if (userIsBoardMember) {
      throw new BadRequestException('User already be in the board');
    }

    return this.boardService.updateMembers(board.id, handleMemberDTO.userId, 'add');
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(BoardMemberGuard, BoardAdminGuard)
  @Delete(':id/members/delete')
  async deleteMember(@Req() req: WithBoardRequest, @Body() handleMemberDTO: HandleBoardMemberDTO) {
    const user = req.user;
    const board = req.board;

    if (user.id === handleMemberDTO.userId) {
      throw new BadRequestException("You can't remove yourself from board");
    }

    const userById = await this.userService.findById(handleMemberDTO.userId);

    if (!userById) {
      throw new NotFoundException('The user does not exists');
    }

    const userIsBoardMember = this.boardService.userIsBoardMember(board, handleMemberDTO.userId);

    if (!userIsBoardMember) {
      throw new BadRequestException('User is not in the board');
    }

    return this.boardService.updateMembers(board.id, handleMemberDTO.userId, 'delete');
  }
}
