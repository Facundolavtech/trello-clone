import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardLabelDTO, UpdateCardLabelDTO } from '../dto/label.dto';
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

  async update(id: string, updateDTO: UpdateCardLabelDTO): Promise<BoardCardLabel> {
    const updatedLabel = await this.cardLabelRepository.createQueryBuilder().update(updateDTO).where('id = :id', { id }).returning('*').updateEntity(true).execute();

    return updatedLabel.raw[0];
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
}
