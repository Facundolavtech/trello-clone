import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../User/entities/User.entity';
import { CreateBoardDTO } from '../dto/create.dto';
import { UpdateBoardDTO } from '../dto/update.dto';
import { Board } from '../entities/Board.entity';
import { BoardMember } from '../entities/BoardMember.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
    @InjectRepository(BoardMember) private boardMemberRepository: Repository<BoardMember>
  ) {}
  async create(createDTO: CreateBoardDTO, user: User): Promise<Board> {
    const newBoard = this.boardRepository.create({ ...createDTO, adminId: user.id, members: [user] });

    await this.boardRepository.save(newBoard);

    const newMember = this.boardMemberRepository.create({
      boardId: newBoard.id,
      userId: user.id,
    });

    await this.boardMemberRepository.save(newMember);

    return newBoard;
  }

  async update(id: string, updateDTO: UpdateBoardDTO): Promise<Board> {
    const updatedBoard = await this.boardRepository.createQueryBuilder().update(updateDTO).where('id = :id', { id }).returning('*').updateEntity(true).execute();

    return updatedBoard.raw[0];
  }

  async delete(id: string): Promise<Board> {
    const deletedBoard = await this.boardRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return deletedBoard.raw[0];
  }

  async updateMembers(boardId: string, userId: string, action: 'add' | 'delete'): Promise<BoardMember> {
    if (action === 'add') {
      return await this.createBoardMember(boardId, userId);
    } else if (action === 'delete') {
      return await this.deleteBoardMember(boardId, userId);
    }
  }

  async findById(id: string): Promise<Board> {
    return await this.boardRepository.findOne({ where: { id } });
  }

  async findByIdWithRelations(id: string, relations: string[]): Promise<Board> {
    return await this.boardRepository.findOne({ where: { id }, relations });
  }

  async findAll(userId: string): Promise<Board[]> {
    return await this.boardRepository.find({
      where: [
        {
          members: { userId },
        },
        { isPrivate: false },
      ],
    });
  }

  async findAllWithRelations(userId: string, relations: string[]): Promise<Board[]> {
    return await this.boardRepository.find({
      where: [
        {
          members: { userId },
        },
        { isPrivate: false },
      ],
      relations,
    });
  }

  async findByTitle(title: string): Promise<Board> {
    return await this.boardRepository.findOne({ where: { title } });
  }

  async createBoardMember(boardId: string, userId: string): Promise<BoardMember> {
    return await this.boardMemberRepository.save(
      this.boardMemberRepository.create({
        userId,
        boardId,
      })
    );
  }

  findBoardMember(board: Board, userId: string): BoardMember {
    return board.members.find((member) => member.user.id === userId);
  }

  async deleteBoardMember(boardId: string, memberId: string): Promise<BoardMember> {
    const queryBuilder = this.boardMemberRepository
      .createQueryBuilder('board_member')
      .where('board_member.boardId = :boardId', { boardId })
      .andWhere('board_member.userId = :userId', { userId: memberId });

    const boardMember = await queryBuilder.getOne();

    await this.boardMemberRepository.remove(boardMember);

    return boardMember;
  }

  userIsBoardMember(board: Board, userId: string): boolean {
    return board.members.some((member) => member.user.id === userId);
  }
}
