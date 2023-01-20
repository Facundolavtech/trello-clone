import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardCardCommentDTO } from '../dto/create.dto';
import { UpdateBoardCardCommentDTO } from '../dto/update.dto';
import { BoardCardComment } from '../entities/Comment.entity';

@Injectable()
export class CardCommentService {
  constructor(
    @InjectRepository(BoardCardComment)
    private cardCommentRepository: Repository<BoardCardComment>
  ) {}

  async create(cardId: string, userId: string, createDTO: CreateBoardCardCommentDTO) {
    const card = await this.cardCommentRepository.findOne({ id: cardId });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    const member = await this.boardMemberRepository.findOne({
      where: { user: userId },
    });

    const newComment = this.cardCommentRepository.create({
      ...createDTO,
      author: member.id,
      card: cardId,
    });

    await this.cardCommentRepository.save(newComment);

    return newComment;
  }

  async findAll(cardId: string) {
    const card = await this.cardCommentRepository.findOne({ id: cardId }, { relations: ['comments', 'comments.author'] });

    if (!card) {
      throw new NotFoundException('The card does not exists');
    }

    return card.comments;
  }

  async findOne(commentId: string) {
    const comment = await this.cardCommentRepository.findOne({ id: commentId }, { relations: ['author'] });

    if (!comment) {
      throw new NotFoundException('Card comment not found');
    }

    return comment;
  }

  async update(commentId: string, updateDTO: UpdateBoardCardCommentDTO) {
    const comment = await this.cardCommentRepository.findOne({ id: commentId });

    const updatedCardComment = await this.cardCommentRepository.save(Object.assign(comment, updateDTO));

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
