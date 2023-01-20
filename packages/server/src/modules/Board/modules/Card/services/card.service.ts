import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../../../../user/services/user.service';
import { AddCardMemberDto } from '../dto/add-member.dto';
import { CreateCardDto } from '../dto/create-card.dto';
import { RemoveCardMemberDto } from '../dto/remove-member.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import { BoardCard } from '../entities/Card.entity';

@Injectable()
export class BoardCardService {
  constructor(@InjectRepository(BoardCard) private cardRepository: Repository<BoardCard>, @Inject(UserService) private userService: UserService) {}

  async create(boardId: string, listId: string, userId: string, createCardDto: CreateCardDto) {
    const cardExists = await this.cardRepository.findOne({
      where: { title: createCardDto.title, list: listId },
    });

    if (cardExists) {
      throw new BadRequestException('Already card exists with same title');
    }

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
        relations: ['members', 'comments', 'comments.author', 'attachments', 'labels'],
      }
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

    const updatedCard = await this.cardRepository.save(Object.assign(card, updateCardDto));

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
    const card = await this.cardRepository.findOne({ id: cardId }, { relations: ['members', 'members.user'] });

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
    const card = await this.cardRepository.findOne({ id: cardId }, { relations: ['members', 'members.user'] });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const user = await this.userService.findUserByEmail(removeCardMemberDto.email);

    const boardMember = await this.boardMemberRepository.findOne({
      user: user.id,
    });

    if (!boardMember) {
      throw new NotFoundException('User does not be in the board');
    }

    if (!card.members.find((member) => member.user['id'] === user.id)) {
      throw new BadRequestException('User does not be in the card');
    }

    card.members = card.members = card.members.filter((member) => member.user['id'] !== user.id);

    await this.cardRepository.save(card);

    return {
      statusCode: 200,
      message: `User ${removeCardMemberDto.email} deleted from card`,
    };
  }
}
