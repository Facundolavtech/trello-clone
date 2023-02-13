import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardMember } from '../entities/BoardMember.entity';

@Injectable()
export class BoardMemberService {
  constructor(@InjectRepository(BoardMember) private boardMemberRepository: Repository<BoardMember>) {}

  async findOne(boardId: string, userId: string): Promise<BoardMember> {
    return await this.boardMemberRepository.findOne({ where: { boardId, userId } });
  }

  async findAll(boardId: string): Promise<BoardMember[]> {
    return await this.boardMemberRepository.find({ where: { boardId } });
  }

  async userIsBoardMember(boardId: string, userId: string): Promise<Boolean> {
    return (await this.findOne(boardId, userId)) ? true : false;
  }
}
