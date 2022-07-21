import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../users/entities/user.entity';
import { Card } from '../entities/card.entity';
import { CreateCardsCommentDto } from './dto/create-cards-comment.dto';
import { UpdateCardsCommentDto } from './dto/update-cards-comment.dto';
import { CardComment } from './entities/card-comment.entity';

@Injectable()
export class CardsCommentsService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(CardComment)
    private cardCommentRepository: Repository<CardComment>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async create(
    cardId: string,
    userId: string,
    createCardsCommentDto: CreateCardsCommentDto,
  ) {
    const card = await this.cardRepository.findOne({ id: cardId });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const author = await this.userRepository.findOne({ id: userId });

    const newComment = this.cardCommentRepository.create({
      ...createCardsCommentDto,
      author,
      card: cardId,
    });

    await this.cardCommentRepository.save(newComment);

    return newComment;
  }

  async findAll(cardId: string) {
    const card = await this.cardRepository.findOne(
      { id: cardId },
      { relations: ['comments', 'comments.author'] },
    );

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    return card.comments;
  }

  async findOne(commentId: string) {
    const comment = await this.cardCommentRepository.findOne(
      { id: commentId },
      { relations: ['author'] },
    );

    if (!comment) {
      throw new NotFoundException('Card comment not found');
    }

    return comment;
  }

  async update(
    commentId: string,
    updateCardsCommentDto: UpdateCardsCommentDto,
  ) {
    const comment = await this.cardCommentRepository.findOne({ id: commentId });

    const updatedCardComment = await this.cardCommentRepository.save(
      Object.assign(comment, updateCardsCommentDto),
    );

    return updatedCardComment;
  }

  async remove(commentId: string) {
    await this.cardCommentRepository.delete({ id: commentId });

    return {
      statusCode: 200,
      message: 'Card comment deleted successfully',
    };
  }
}
