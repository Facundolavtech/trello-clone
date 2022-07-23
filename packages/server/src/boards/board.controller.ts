import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  UseGuards,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { AdminGuard } from './guards/admin.guard';
import { BoardMemberGuard } from './guards/board-member.guard';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Request() req, @Body() createBoardDto: CreateBoardDto) {
    const userId = req.user.id;
    return this.boardService.create(createBoardDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll/public')
  findAllPublic() {
    return this.boardService.findAllPublicBoards();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOne/public/:boardId')
  findOnePublic(@Param('boardId') boardId: string) {
    return this.boardService.findOnePublicBoard(boardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/private/:boardId')
  findOnePrivate(@Param('boardId') boardId: string) {
    return this.boardService.findOnePrivateBoard(boardId);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Put('update/:boardId')
  update(
    @Param('boardId') boardId: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.update(boardId, updateBoardDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete('delete/:boardId')
  remove(@Param('boardId') boardId: string) {
    return this.boardService.remove(boardId);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Post(':boardId/members/add/:userId')
  addMember(
    @Param('boardId') boardId: string,
    @Param('userId') userId: string,
  ) {
    return this.boardService.addMember(boardId, userId);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete(':boardId/members/delete/:userId')
  deleteMember(
    @Param('boardId') boardId: string,
    @Param('userId') userId: string,
  ) {
    return this.boardService.deleteMember(boardId, userId);
  }
}
