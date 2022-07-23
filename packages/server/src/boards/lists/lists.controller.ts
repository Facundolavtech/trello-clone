import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { AuthGuard } from '@nestjs/passport';
import { BoardMemberGuard } from '../guards/board-member.guard';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create/:boardId')
  create(
    @Param('boardId')
    boardId: string,
    @Body() createListDto: CreateListDto,
  ) {
    return this.listsService.create(boardId, createListDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll/:boardId')
  findAll(
    @Param('boardId')
    boardId: string,
  ) {
    return this.listsService.findAll(boardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:id/:boardId')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(id, updateListDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:id/:boardId')
  remove(@Param('id') id: string) {
    return this.listsService.remove(id);
  }
}
