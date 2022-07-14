import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createBoardDto: CreateBoardDto, userId: string) {
    const boardExists = await this.boardRepository.findOne({
      title: createBoardDto.title,
    });

    if (boardExists)
      throw new BadRequestException('Already board exists with same title');

    console.log(userId);

    const owner = await this.userRepository.findOne({ id: userId });

    const newBoard = this.boardRepository.create(createBoardDto);
    newBoard.members = [owner];
    newBoard.admins = [owner];

    await this.boardRepository.save(newBoard);

    return newBoard;
  }

  async findAllPublicBoards() {
    const getAllPublicBoards = await this.boardRepository.find({
      where: { visible: true },
      relations: ['members', 'admins'],
    });

    return getAllPublicBoards;
  }

  async findOnePublicBoard(id: string): Promise<Board> {
    try {
      const findPublicBoardById = await this.boardRepository.findOne({
        where: { visible: true, id },
        relations: ['admins', 'members'],
      });

      if (!findPublicBoardById)
        throw new NotFoundException('The board does not exist or is private');

      return findPublicBoardById;
    } catch {
      throw new NotFoundException('The board does not exist or is private');
    }
  }

  async findOnePrivateBoard(id: string): Promise<Board> {
    try {
      const findPrivateById = await this.boardRepository.findOne({
        where: { id },
        relations: ['admins', 'members'],
      });

      if (!findPrivateById)
        throw new NotFoundException('The board does not exist');

      return findPrivateById;
    } catch {
      throw new NotFoundException('The board does not exists');
    }
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const boardExistsWithSameTitle = await this.boardRepository.findOne({
      title: updateBoardDto.title,
    });

    if (boardExistsWithSameTitle) {
      throw new BadRequestException('A board already exists with this title');
    }

    await this.boardRepository.update({ id }, updateBoardDto);

    return {
      statusCode: 200,
      message: 'Board updated successfully',
    };
  }

  async remove(id: string) {
    await this.boardRepository.delete({ id });

    return {
      statusCode: 200,
      message: 'Board deleted successfully',
    };
  }
}
