import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
    @InjectRepository(List) private boardRepository: Repository<List>,
  ) {}

  async create(boardId: string, createListDto: CreateListDto) {
    const listAlreadyExists = await this.listRepository.findOne({
      name: createListDto.name,
    });

    if (listAlreadyExists) {
      throw new BadRequestException('A list already exists with this name');
    }

    const newList = this.listRepository.create(createListDto);

    newList.board = boardId;

    await this.listRepository.save(newList);

    return newList;
  }

  async findAll(boardId: string) {
    const lists = await this.listRepository.find({
      where: { board: boardId },
      relations: [
        'cards',
        'cards.members',
        'cards.members.user',
        'cards.comments',
        'cards.attachments',
        'cards.labels',
      ],
    });

    return lists;
  }

  async update(id: string, updateListDto: UpdateListDto) {
    const list = await this.listRepository.findOne({
      id,
    });

    if (!list) {
      throw new BadRequestException('List does not exists');
    }

    if (updateListDto.name && list.name === updateListDto.name) {
      throw new BadRequestException('A list already exists with same name');
    }

    const updatedList = await this.listRepository.save(
      Object.assign(list, updateListDto),
    );

    return updatedList;
  }

  async remove(id: string) {
    const findListById = await this.listRepository.findOne({ id });

    if (!findListById) {
      throw new NotFoundException('List does not exists');
    }

    await this.listRepository.delete(findListById);

    return {
      statusCode: 200,
      message: 'List deleted successfully',
    };
  }
}
