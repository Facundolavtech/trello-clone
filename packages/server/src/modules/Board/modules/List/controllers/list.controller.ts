import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { AuthenticatedGuard } from '../../../../Auth/guards/auth.guard';
import { BoardMemberGuard } from '../../../guards/board-member.guard';
import { CreateListDTO, UpdateListDTO } from '../dto/list.dto';
import { BoardListService } from '../services/list.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/lists')
export class BoardListController {
  constructor(private boardListService: BoardListService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async create(
    @Param('boardId')
    boardId: string,
    @Body() createDTO: CreateListDTO
  ) {
    const listExists = await this.boardListService.findByQuery({
      name: createDTO.name,
      boardId,
    });

    if (listExists) {
      throw new BadRequestException('A list already exists with this name');
    }

    return await this.boardListService.create(boardId, createDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(
    @Param('boardId')
    boardId: string
  ) {
    return this.boardListService.findAllWithRelations(boardId, ['cards', 'cards.members']);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id') id: string, @Param('boardId') boardId: string, @Body() updateDTO: UpdateListDTO) {
    if (updateDTO.name) {
      const listExists = await this.boardListService.findByQuery({
        name: updateDTO.name,
        boardId,
        id,
      });

      if (listExists) {
        throw new BadRequestException('A list already exists with this name');
      }
    } else {
      const listById = await this.boardListService.findById(id);

      if (!listById) {
        throw new NotFoundException('The list does not exists');
      }
    }

    return this.boardListService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    const listById = await this.boardListService.findById(id);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    return this.boardListService.delete(id);
  }
}
