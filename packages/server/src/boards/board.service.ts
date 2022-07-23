import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
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

    if (boardExists) {
      throw new BadRequestException('Already board exists with same title');
    }

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
    const board = await this.boardRepository.findOne({ id });

    if (board.title === updateBoardDto.title) {
      throw new BadRequestException('A board already exists with this title');
    }

    const updatedBoard = await this.boardRepository.save(
      Object.assign(board, updateBoardDto),
    );

    return updatedBoard;
  }

  async remove(id: string) {
    await this.boardRepository.delete({ id });

    return {
      statusCode: 200,
      message: 'Board deleted successfully',
    };
  }

  async addMember(boardId: string, userId: string) {
    const board = await this.boardRepository.findOne(
      { id: boardId },
      { relations: ['members'] },
    );

    const user = await this.userRepository.findOne({ id: userId });

    if (!user) {
      throw new NotFoundException('The user does not exists');
    }

    if (board.members.find((member) => member.id === user.id)) {
      throw new BadRequestException('User already be in the board');
    }

    board.members.push(user);

    await this.boardRepository.save(board);

    return {
      statusCode: 200,
      message: `User ${user.email} successfully added to board ${board.title}`,
    };
  }

  async deleteMember(boardId: string, userId: string) {
    const board = await this.boardRepository.findOne(
      { id: boardId },
      { relations: ['members', 'admins'] },
    );

    const user = await this.userRepository.findOne({ id: userId });

    if (!user) {
      throw new NotFoundException('The user does not exists');
    }

    if (board.admins.find((admin) => admin.id === user.id)) {
      throw new UnauthorizedException(
        'You cant remove yourself from the board',
      );
    }

    if (!board.members.find((member) => member.id === user.id)) {
      throw new BadRequestException('User does not be in the board');
    }

    board.members = board.members.filter((member) => member.id !== userId);

    await this.boardRepository.save(board);

    return {
      statusCode: 200,
      message: `User ${user.email} successfully removed to board ${board.title}`,
    };
  }
}
