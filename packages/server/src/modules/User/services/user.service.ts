import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { RegisterLocalDTO, RegisterWithProviderDTO } from '../../Auth/dto/auth.dto';
import { UpdateUserDTO } from '../dto/update.dto';
import { User } from '../entities/User.entity';
import { IUserProfile } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async hashPassword(plainPassword: string): Promise<string> {
    return await hash(plainPassword, 10);
  }

  async create(registerDTO: RegisterLocalDTO | RegisterWithProviderDTO): Promise<User> {
    return await this.userRepository.save(this.userRepository.create(registerDTO));
  }

  async update(id: string, updateDTO: UpdateUserDTO): Promise<User> {
    const updatedUser = await this.userRepository.createQueryBuilder().update(updateDTO).where('id = :id', { id }).returning('*').updateEntity(true).execute();

    return updatedUser.raw[0];
  }

  async findById(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async changePassword(id: string, newPassword: string): Promise<User> {
    return await this.update(id, { password: newPassword });
  }

  formatUserProfile(user: User): IUserProfile {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      username: user.username,
      provider: user.provider,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
