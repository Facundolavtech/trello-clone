import { Controller, Get, Post, Body, Param, UseGuards, Put, HttpCode, HttpStatus, BadRequestException, Req, NotFoundException } from '@nestjs/common';
import { BoardService } from '../services/board.service';
import { AuthenticatedGuard } from '../../Auth/guards/auth.guard';
import { AuthenticatedRequest } from '../../../common/types';
import { CreateBoardDTO } from '../dto/create.dto';
import { UpdateBoardDTO } from '../dto/update.dto';
import { BoardAdminGuard } from '../guards/board-admin.guard';
import { BoardMemberGuard } from '../guards/board-member.guard';
import { CustomUUIDPipe } from '../../../common/pipes/uuid.pipe';
import { BoardExistGuard } from '../guards/board-exist.guard';

@UseGuards(AuthenticatedGuard)
@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

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
  async findAll(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;

    return await this.boardService.findAll(userId);
  }

  @UseGuards(BoardExistGuard, BoardMemberGuard)
  @HttpCode(HttpStatus.OK)
  @Get(':boardId')
  async findOne(@Param('boardId', CustomUUIDPipe) id: string) {
    return await this.boardService.findById(id, ['members', 'cards', 'cards.labels', 'cards.attachments', 'cards.members', 'cards.comments']);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(BoardExistGuard, BoardMemberGuard, BoardAdminGuard)
  @Put('update/:boardId')
  async update(@Param('boardId', CustomUUIDPipe) id: string, @Body() updateDTO: UpdateBoardDTO) {
    return await this.boardService.update(id, updateDTO);
  }
}
