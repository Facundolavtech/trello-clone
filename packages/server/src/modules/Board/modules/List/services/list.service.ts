import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDTO } from '../dto/create.dto';
import { UpdateListDTO } from '../dto/update.dto';
import { BoardList } from '../entities/BoardList.entity';

@Injectable()
export class BoardListService {
  constructor(@InjectRepository(BoardList) private boardListRepository: Repository<BoardList>) {}

  async create(boardId: string, createDTO: CreateListDTO) {
    const listAlreadyExists = await this.boardListRepository.findOne({
      name: createDTO.name,
    });

    if (listAlreadyExists) {
      throw new BadRequestException('A list already exists with this name');
    }

    const newList = this.boardListRepository.create(createDTO);

    newList.board = boardId;

    await this.boardListRepository.save(newList);

    return newList;
  }

  async findAll(boardId: string) {
    const lists = await this.boardListRepository.find({
      where: { board: boardId },
      relations: ['cards', 'cards.members', 'cards.members.user', 'cards.comments', 'cards.attachments', 'cards.labels'],
    });

    return lists;
  }

  async update(id: string, updateDTO: UpdateListDTO) {
    const list = await this.boardListRepository.findOne({
      id,
    });

    if (!list) {
      throw new BadRequestException('List does not exists');
    }

    if (updateDTO.name && list.name === updateDTO.name) {
      throw new BadRequestException('A list already exists with same name');
    }

    const updatedList = await this.boardListRepository.save(Object.assign(list, updateDTO));

    return updatedList;
  }

  async remove(id: string) {
    const findListById = await this.boardListRepository.findOne({ id });

    if (!findListById) {
      throw new NotFoundException('List does not exists');
    }

    await this.boardListRepository.delete(findListById);

    return {
      statusCode: 200,
      message: 'List deleted successfully',
    };
  }
}
