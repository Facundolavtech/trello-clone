import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardCommentDTO, UpdateCardCommentDTO } from '../dto/comment.dto';
import { BoardCardComment } from '../entities/Comment.entity';

@Injectable()
export class CardCommentService {
  constructor(
    @InjectRepository(BoardCardComment)
    private cardCommentRepository: Repository<BoardCardComment>
  ) {}

  async create(cardId: string, memberId: string, createDTO: CreateCardCommentDTO): Promise<BoardCardComment> {
    return await this.cardCommentRepository.save(
      this.cardCommentRepository.create({
        ...createDTO,
        authorId: memberId,
        cardId,
      })
    );
  }

  async update(id: string, updateDTO: UpdateCardCommentDTO): Promise<BoardCardComment> {
    const updatedComment = await this.cardCommentRepository
      .createQueryBuilder()
      .update(updateDTO)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute();

    return updatedComment.raw[0];
  }

  async delete(id: string): Promise<BoardCardComment> {
    const deletedComment = await this.cardCommentRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return deletedComment.raw[0];
  }

  async findAll(cardId: string): Promise<BoardCardComment[]> {
    return await this.cardCommentRepository.find({ where: { cardId } });
  }

  async findById(id: string): Promise<BoardCardComment> {
    return await this.cardCommentRepository.findOne({ where: { id } });
  }
}
