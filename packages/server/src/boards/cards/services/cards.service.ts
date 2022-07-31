import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../../../users/users.service';
import { BoardMember } from '../../entities/board-member.entity';
import { List } from '../../lists/entities/list.entity';
import { AddCardMemberDto } from '../dto/add-member.dto';
import { CreateCardDto } from '../dto/create-card.dto';
import { RemoveCardMemberDto } from '../dto/remove-member.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { Card } from '../entities/card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card) private cardRepository: Repository<Card>,
    @InjectRepository(List) private listRepository: Repository<List>,
    @InjectRepository(BoardMember)
    private boardMemberRepository: Repository<BoardMember>,
    @Inject(UsersService) private userService: UsersService,
  ) {}

  async create(
    boardId: string,
    listId: string,
    userId: string,
    createCardDto: CreateCardDto,
  ) {
    const list = await this.listRepository.findOne({ id: listId });

    if (!list) throw new NotFoundException('List does not exists');

    const cardExists = await this.cardRepository.findOne({
      where: { title: createCardDto.title, list: list.id },
    });

    if (cardExists) {
      throw new BadRequestException('Already card exists with same title');
    }

    const member = await this.boardMemberRepository.findOne({
      user: userId,
      board: boardId,
    });

    const newCard = this.cardRepository.create({
      ...createCardDto,
      board: boardId,
      list: listId,
      members: [member],
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
      relations: ['members', 'attachments', 'labels', 'comments'],
    });

    return cards;
  }

  async findOne(cardId: string) {
    const card = await this.cardRepository.findOne(
      { id: cardId },
      {
        relations: [
          'members',
          'comments',
          'comments.author',
          'attachments',
          'labels',
        ],
      },
    );

    if (!card) {
      throw new NotFoundException('The card does not exist');
    }

    return card;
  }

  async update(cardId: string, updateCardDto: UpdateCardDto) {
    const card = await this.cardRepository.findOne({ id: cardId });

    if (!card) throw new NotFoundException('The card does not exists');

    if (card.title === updateCardDto.title) {
      throw new BadRequestException('A card already exists with this title');
    }

    const updatedCard = await this.cardRepository.save(
      Object.assign(card, updateCardDto),
    );

    return updatedCard;
  }

  async remove(cardId: string) {
    const card = await this.cardRepository.findOne({ id: cardId });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    await this.cardRepository.delete(card);

    return {
      statusCode: 200,
      message: 'Card deleted successfully',
    };
  }

  async addMember(cardId: string, addCardMemberDto: AddCardMemberDto) {
    const card = await this.cardRepository.findOne(
      { id: cardId },
      { relations: ['members', 'members.user'] },
    );

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const user = await this.userService.findUserByEmail(addCardMemberDto.email);

    const boardMember = await this.boardMemberRepository.findOne({
      user: user.id,
    });

    if (!boardMember) {
      throw new NotFoundException('User does not be in the board');
    }

    if (card.members.find((member) => member.user['id'] === user.id)) {
      throw new BadRequestException('User already be in the card');
    }

    card.members.push(boardMember);
    await this.cardRepository.save(card);

    return {
      statusCode: 200,
      message: `User ${addCardMemberDto.email} joined to card`,
    };
  }

  async deleteMember(cardId: string, removeCardMemberDto: RemoveCardMemberDto) {
    const card = await this.cardRepository.findOne(
      { id: cardId },
      { relations: ['members', 'members.user'] },
    );

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const user = await this.userService.findUserByEmail(
      removeCardMemberDto.email,
    );

    const boardMember = await this.boardMemberRepository.findOne({
      user: user.id,
    });

    if (!boardMember) {
      throw new NotFoundException('User does not be in the board');
    }

    if (!card.members.find((member) => member.user['id'] === user.id)) {
      throw new BadRequestException('User does not be in the card');
    }

    card.members = card.members = card.members.filter(
      (member) => member.user['id'] !== user.id,
    );

    await this.cardRepository.save(card);

    return {
      statusCode: 200,
      message: `User ${removeCardMemberDto.email} deleted from card`,
    };
  }
}
