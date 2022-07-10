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

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Request() req, @Body() createBoardDto: CreateBoardDto) {
    const { userId } = req.user;
    return this.boardService.create(createBoardDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findAll/public')
  findAllPublic() {
    return this.boardService.findAllPublicBoards();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('findOne/public/:id')
  findOnePublic(@Param('id') id: string) {
    return this.boardService.findOnePublicBoard(id);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/private/:boardId')
  findOnePrivate(@Param('boardId') boardId: string) {
    return this.boardService.findOnePrivateBoard(boardId);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
  }

  @UseGuards(AuthGuard('jwt'), AdminGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(id);
  }
}
