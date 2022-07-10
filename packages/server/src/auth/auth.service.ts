import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateFromEmail } from 'unique-username-generator';
import { User } from '../users/entities/user.entity';
import { RegisterUserDto } from './dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      const newUser = await this.registerUser(user);

      return this.generateJwt({
        sub: newUser.id,
        email: newUser.email,
      });
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerUser(user: RegisterUserDto) {
    try {
      const newUser = this.userRepository.create(user);
      newUser.username = generateFromEmail(user.email, 5);

      await this.userRepository.save(newUser);

      return newUser;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}
