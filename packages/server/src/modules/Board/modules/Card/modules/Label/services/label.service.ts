import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateCardLabelDTO } from '../dto/label.dto';
import { BoardCardLabel } from '../entities/Label.entity';

@Injectable()
export class CardLabelService {
  constructor(
    @InjectRepository(BoardCardLabel)
    private cardLabelRepository: Repository<BoardCardLabel>
  ) {}

  async create(cardId: string, createDTO: CreateCardLabelDTO): Promise<BoardCardLabel> {
    return await this.cardLabelRepository.save(
      this.cardLabelRepository.create({
        ...createDTO,
        cardId,
      })
    );
  }

  async delete(id: string): Promise<BoardCardLabel> {
    const deletedLabel = await this.cardLabelRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return deletedLabel.raw[0];
  }

  async findAll(cardId: string): Promise<BoardCardLabel[]> {
    return await this.cardLabelRepository.find({ where: { cardId } });
  }

  async findById(id: string): Promise<BoardCardLabel> {
    return await this.cardLabelRepository.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<BoardCardLabel> {
    return await this.cardLabelRepository.findOne({ where: { name } });
  }

  async findOneByQuery(query: FindOptionsWhere<BoardCardLabel>): Promise<BoardCardLabel> {
    return await this.cardLabelRepository.findOne({ where: query });
  }
}
