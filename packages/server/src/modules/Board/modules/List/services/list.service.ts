import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateListDTO, UpdateListDTO } from '../dto/list.dto';
import { BoardList } from '../entities/BoardList.entity';

@Injectable()
export class BoardListService {
  constructor(@InjectRepository(BoardList) private boardListRepository: Repository<BoardList>) {}

  async create(boardId: string, createDTO: CreateListDTO): Promise<BoardList> {
    const { id } = await this.boardListRepository.save(this.boardListRepository.create({ ...createDTO, boardId }));

    return await this.findById(id, ['cards', 'cards.members']);
  }

  async update(id: string, updateDTO: UpdateListDTO): Promise<BoardList> {
    const updatedList = await this.boardListRepository.createQueryBuilder().update(updateDTO).where('id = :id', { id }).returning('*').updateEntity(true).execute();

    return updatedList.raw[0];
  }

  async delete(id: string): Promise<BoardList> {
    const deletedList = await this.boardListRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return deletedList.raw[0];
  }

  async findById(id: string, relations?: string[]): Promise<BoardList> {
    return await this.boardListRepository.findOne({ where: { id }, relations });
  }

  async findByQuery(query: FindOptionsWhere<BoardList>): Promise<BoardList> {
    return await this.boardListRepository.findOne({ where: query });
  }

  async findAll(boardId: string, relations?: string[]): Promise<BoardList[]> {
    return await this.boardListRepository.find({
      where: { boardId },
      select: ['cards', 'id', 'name', 'createdAt', 'updatedAt'],
      relations,
      order: { createdAt: 'asc' },
    });
  }
}
