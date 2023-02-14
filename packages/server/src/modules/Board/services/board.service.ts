import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../User/entities/User.entity';
import { CreateBoardDTO } from '../dto/create.dto';
import { UpdateBoardDTO } from '../dto/update.dto';
import { Board, BoardVisibility } from '../entities/Board.entity';
import { BoardMemberService } from './board-member.service';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(Board) private boardRepository: Repository<Board>, private boardMemberService: BoardMemberService) {}

  async create(createDTO: CreateBoardDTO, user: User): Promise<Board> {
    const newBoard = this.boardRepository.create({ ...createDTO, adminId: user.id, members: [user] });

    await this.boardRepository.save(newBoard);

    await this.boardMemberService.create(newBoard.id, user.id);

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

  async findById(id: string, relations?: string[]): Promise<Board> {
    return await this.boardRepository.findOne({ where: { id }, relations });
  }

  async findAll(userId: string): Promise<Board[]> {
    const subquery = this.boardRepository
      .createQueryBuilder('boardSubquery')
      .leftJoin('boardSubquery.members', 'member')
      .leftJoin('member.user', 'user')
      .where('boardSubquery.visibility = :privateVisibility AND user.id = :userId', {
        privateVisibility: BoardVisibility.PRIVATE,
        userId,
      })
      .select('boardSubquery.id');

    return await this.boardRepository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.admin', 'admin')
      .leftJoinAndSelect('board.members', 'member')
      .leftJoinAndSelect('member.user', 'user')
      .where('board.visibility = :publicVisibility OR board.id IN (' + subquery.getQuery() + ')', {
        ...subquery.getParameters(),
        publicVisibility: BoardVisibility.PUBLIC,
      })
      .getMany();
  }

  async findByTitle(title: string, relations?: string[]): Promise<Board> {
    return await this.boardRepository.findOne({ where: { title }, relations });
  }
}
