import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../boards/entities/board.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  async getProfile(userId: string) {
    const user = await this.userRepository.findOne(
      {
        id: userId,
      },
      { relations: ['user_board_members'] },
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  //GET userBoards
  /*async getUserBoards(userId: string) {
    const userBoards = await this.boardRepository
      .createQueryBuilder('boards')
      .leftJoin('boards.members', 'members')
      .where('members.id = :id', { id: userId })
      .getMany();

    return userBoards;
  }*/
}
