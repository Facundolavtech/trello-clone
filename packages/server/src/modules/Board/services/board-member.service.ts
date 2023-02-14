import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardMember } from '../entities/BoardMember.entity';

@Injectable()
export class BoardMemberService {
  constructor(@InjectRepository(BoardMember) private boardMemberRepository: Repository<BoardMember>) {}

  async findOne(boardId: string, userId: string, relations?: string[]): Promise<BoardMember> {
    return await this.boardMemberRepository.findOne({ where: { boardId, userId }, relations });
  }

  async findAll(boardId: string): Promise<BoardMember[]> {
    return await this.boardMemberRepository.find({ where: { boardId } });
  }

  async userIsBoardMember(boardId: string, userId: string): Promise<Boolean> {
    return (await this.findOne(boardId, userId)) ? true : false;
  }

  async create(boardId: string, userId: string): Promise<BoardMember> {
    return await this.boardMemberRepository.save(
      this.boardMemberRepository.create({
        userId,
        boardId,
      })
    );
  }

  async delete(boardId: string, memberId: string): Promise<BoardMember> {
    const queryBuilder = this.boardMemberRepository
      .createQueryBuilder('board_member')
      .where('board_member.boardId = :boardId', { boardId })
      .andWhere('board_member.userId = :userId', { userId: memberId });

    const boardMember = await queryBuilder.getOne();

    await this.boardMemberRepository.remove(boardMember);

    return boardMember;
  }

  async updateMembers(boardId: string, userId: string, action: 'add' | 'delete'): Promise<BoardMember> {
    if (action === 'add') {
      return await this.create(boardId, userId);
    } else if (action === 'delete') {
      return await this.delete(boardId, userId);
    }
  }
}
