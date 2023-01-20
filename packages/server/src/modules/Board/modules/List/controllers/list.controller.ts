import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateListDTO } from '../dto/create.dto';
import { BoardMemberGuard } from '../../../guards/board-member.guard';
import { UpdateListDTO } from '../dto/update.dto';
import { BoardListService } from '../services/list.service';

@Controller('lists')
export class BoardListController {
  constructor(private boardListService: BoardListService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create/:boardId')
  create(
    @Param('boardId')
    boardId: string,
    @Body() createDTO: CreateListDTO
  ) {
    return this.boardListService.create(boardId, createDTO);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll/:boardId')
  findAll(
    @Param('boardId')
    boardId: string
  ) {
    return this.boardListService.findAll(boardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:id/:boardId')
  update(@Param('id') id: string, @Body() updateDTO: UpdateListDTO) {
    return this.boardListService.update(id, updateDTO);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:id/:boardId')
  remove(@Param('id') id: string) {
    return this.boardListService.remove(id);
  }
}
