import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from '../../lists/entities/list.entity';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { Card } from '../entities/card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card) private cardRepository: Repository<Card>,
    @InjectRepository(List) private listRepository: Repository<List>,
  ) {}

  async create(boardId: string, listId: string, createCardDto: CreateCardDto) {
    const list = await this.listRepository.findOne({ id: listId });

    if (!list) throw new NotFoundException('List does not exists');

    const cardExists = await this.cardRepository.findOne({
      where: { title: createCardDto.title, list: list.id },
    });

    if (cardExists) {
      throw new BadRequestException('Already card exists with same title');
    }

    const newCard = this.cardRepository.create({
      ...createCardDto,
      board: boardId,
      list: listId,
    });

    await this.cardRepository.save(newCard);

    return newCard;
  }

  async findAll(listId: string) {
    const list = await this.listRepository.findOne({ id: listId });

    if (!list) {
      throw new NotFoundException('The list does not exists');
    }

    const cards = await this.cardRepository.find({
      where: { list: listId },
      relations: ['attachments', 'labels', 'comments'],
    });

    return cards;
  }

  async findOne(id: string) {
    const card = await this.cardRepository.findOne(
      { id },
      {
        relations: ['comments', 'comments.author', 'attachments', 'labels'],
      },
    );

    if (!card) {
      throw new NotFoundException('The card does not exist');
    }

    return card;
  }

  async update(id: string, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.findOne({ id });

    if (!card) throw new NotFoundException('The card does not exists');
    if (card.title === updateCardDto.title)
      throw new BadRequestException('A card already exists with this title');

    const updatedCard = await this.cardRepository.save(
      Object.assign(card, updateCardDto),
    );

    return updatedCard;
  }

  async remove(id: string) {
    const card = await this.cardRepository.findOne({ id });

    if (!card) throw new NotFoundException('The card does not exists');

    await this.cardRepository.remove(card);

    return {
      statusCode: 200,
      message: 'Card deleted successfully',
    };
  }
}
