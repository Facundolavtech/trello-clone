import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getProfile(id) {
    const user = await this.userRepository.findOne(
      { id },
      { relations: ['boards'] },
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
