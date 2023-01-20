import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  HttpCode,
  HttpStatus,
  Query,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
  Req,
} from '@nestjs/common';
import { BoardService } from '../services/board.service';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import { AdminGuard } from '../guards/admin.guard';
import { AuthenticatedGuard } from '../../Auth/guards/auth.guard';
import { UserService } from '../../user/services/user.service';
import { AuthenticatedRequest } from '../../../common/types';

@UseGuards(AuthenticatedGuard)
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService, private userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticatedGuard)
  @Post('create')
  async create(@Req() req: AuthenticatedRequest, @Body() createDTO: CreateBoardDto) {
    const userId = req.user.id;

    const boardByTitle = await this.boardService.findByTitle(createDTO.title);

    if (boardByTitle) {
      throw new BadRequestException('Already board exists with same title');
    }

    return this.boardService.create(createDTO, userId);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query('isPrivate') isPrivate?: boolean) {
    return await this.boardService.findAll(isPrivate);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.boardService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminGuard)
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() updateDTO: UpdateBoardDto) {
    const boardById = await this.boardService.findById(id);

    if (!boardById) {
      throw new NotFoundException('The board does not exists');
    }

    return this.boardService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const boardById = await this.boardService.findById(id);

    if (!boardById) {
      throw new NotFoundException('The board does not exists');
    }

    return await this.boardService.delete(id);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminGuard)
  @Post(':id/members/add/:userId')
  async addMember(@Param('id') id: string, @Param('userId') userId: string) {
    const boardById = await this.boardService.findById(id);

    if (!boardById) {
      throw new NotFoundException('The board does not exists');
    }

    const user = await this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException('The user does not exists');
    }

    if (boardById.members.find((member) => member.user['id'] === user.id)) {
      throw new BadRequestException('User already be in the board');
    }

    return this.boardService.addMember(id, userId);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AdminGuard)
  @Delete(':id/members/delete/:userId')
  async deleteMember(@Param('id') id: string, @Param('userId') userId: string) {
    const board = await this.boardService.findById(id);

    if (!board) {
      throw new NotFoundException('The board does not exists');
    }

    const user = await this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException('The user does not exists');
    }

    if (board.admin === user.id) {
      throw new UnauthorizedException('You cant remove yourself from the board');
    }

    if (!board.members.find((member) => member.user['id'] === user.id)) {
      throw new BadRequestException('User does not be in the board');
    }

    return await this.boardService.addMember(id, userId);
  }
}
