import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import { Board } from '../entities/Board.entity';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(Board) private boardRepository: Repository<Board>) {}
  async create(createDTO: CreateBoardDto, userId: string): Promise<Board> {
    return await this.boardRepository.save(this.boardRepository.create({ ...createDTO, admin: userId }));

    // const newBoardMember = this.boardMemberRepository.create({
    //   user: userId,
    //   board: newBoard.id,
    // });

    // await this.boardMemberRepository.save(newBoardMember);
  }

  async update(id: string, updateDTO: UpdateBoardDto): Promise<Board> {
    const updatedBoard = await this.boardRepository
      .createQueryBuilder('board')
      .update('board', updateDTO)
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute();

    return updatedBoard.raw[0];
  }

  async delete(id: string): Promise<Board> {
    const deletedBoard = await this.boardRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return deletedBoard.raw[0];
  }

  async addMember(boardId: string, userId: string): Promise<string> {
    // const newBoardMember = await this.boardMemberRepository.create({
    //   user: user.id,
    //   board: board.id,
    // });

    // await this.boardMemberRepository.save(newBoardMember);

    return `User successfully added to board`;
  }

  async deleteMember(id: string, userId: string): Promise<string> {
    // await this.boardMemberRepository.delete({
    //   user: user.id,
    //   board: board.id,
    // });

    return await `User successfully removed to board`;
  }

  async findById(id: string): Promise<Board> {
    return await this.boardRepository.findOne({ where: { id } });
  }

  async findAll(isPrivate = false): Promise<Board[]> {
    return await this.boardRepository.find({
      where: { isPrivate },
    });
  }

  async findByTitle(title: string): Promise<Board> {
    return await this.boardRepository.findOne({ where: { title } });
  }
}
