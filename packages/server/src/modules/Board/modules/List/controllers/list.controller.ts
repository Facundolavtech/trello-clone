import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { CustomUUIDPipe } from '../../../../../common/pipes/uuid.pipe';
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
    @Param('boardId', CustomUUIDPipe)
    boardId: string,
    @Body() createDTO: CreateListDTO
  ) {
    const listByQuery = await this.boardListService.findByQuery({
      boardId,
      name: createDTO.name,
    });

    if (listByQuery) {
      throw new BadRequestException('A list already exists with this name');
    }

    const createResult = await this.boardListService.create(boardId, createDTO);

    return await this.boardListService.findByIdWithRelations(createResult.id, ['cards', 'cards.members']);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(
    @Param('boardId', CustomUUIDPipe)
    boardId: string
  ) {
    return await this.boardListService.findAllWithRelations(boardId, ['cards', 'cards.members']);
  }

  @HttpCode(HttpStatus.OK)
  @Put('update/:id')
  async update(@Param('id', CustomUUIDPipe) id: string, @Body() updateDTO: UpdateListDTO) {
    const listById = await this.boardListService.findById(id);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    if (listById.name === updateDTO.name) {
      throw new BadRequestException('A list with that name already exists');
    }

    return this.boardListService.update(id, updateDTO);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('id', CustomUUIDPipe) id: string) {
    const listById = await this.boardListService.findById(id);

    if (!listById) {
      throw new NotFoundException('The list does not exists');
    }

    return this.boardListService.delete(id);
  }
}
