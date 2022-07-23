import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from '../entities/card.entity';
import { CreateCardsLabelDto } from './dto/create-label.dto';
import { UpdateCardsLabelDto } from './dto/update-label.dto';
import { CardLabel } from './entities/label.entity';

@Injectable()
export class CardsLabelService {
  constructor(
    @InjectRepository(CardLabel)
    private cardLabelRepository: Repository<CardLabel>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async create(cardId: string, createCardsLabelDto: CreateCardsLabelDto) {
    const card = this.cardRepository.findOne({ id: cardId });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const labelExists = await this.cardLabelRepository.findOne({
      card: cardId,
      name: createCardsLabelDto.name,
    });

    if (labelExists) {
      throw new BadRequestException('Already label exists with same name');
    }

    const newCardLabel = this.cardLabelRepository.create({
      ...createCardsLabelDto,
      card: cardId,
    });

    await this.cardLabelRepository.save(newCardLabel);

    return newCardLabel;
  }

  async findAll(cardId: string) {
    const card = await this.cardRepository.findOne(
      { id: cardId },
      { relations: ['labels'] },
    );

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    return card.labels;
  }

  async findOne(labelId: string) {
    const label = await this.cardLabelRepository.findOne({ id: labelId });

    if (!label) {
      throw new NotFoundException('The label does not exists');
    }

    return label;
  }

  async update(labelId: string, updateCardsLabelDto: UpdateCardsLabelDto) {
    const label = await this.cardLabelRepository.findOne({ id: labelId });

    if (!label) {
      throw new NotFoundException('The label does not exists');
    }

    const updatedLabel = await this.cardLabelRepository.save(
      Object.assign(label, updateCardsLabelDto),
    );

    return updatedLabel;
  }

  async remove(labelId: string) {
    const label = await this.cardLabelRepository.findOne({ id: labelId });

    if (!label) {
      throw new NotFoundException('The label does not exists');
    }

    await this.cardLabelRepository.delete(label);

    return {
      statusCode: 200,
      message: 'Card label deleted successfully',
    };
  }
}
