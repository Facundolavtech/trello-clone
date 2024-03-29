import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../User/entities/User.entity';
import { Repository } from 'typeorm';
import { IAuthProviderUserDTO, IJwtPayload } from '../types';
import { UserService } from '../../User/services/user.service';
import { UserProviders } from '../../User/constants';
import formatUserProvider from '../utils/formatProvider';
import { RegisterLocalDTO } from '../dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, @InjectRepository(User) private userRepository: Repository<User>, private jwtService: JwtService) {}

  async comparePassword(plainPassword: string, hashPassword: string): Promise<boolean> {
    return await compare(plainPassword, hashPassword);
  }

  signJwt(payload: IJwtPayload): string {
    return this.jwtService.sign(payload);
  }

  async loginWithProvider(userData: IAuthProviderUserDTO): Promise<User> {
    const userByEmail = await this.userService.findByEmail(userData.email);

    if (!userByEmail) {
      return await this.userService.create(userData);
    }

    if (userByEmail.provider !== userData.provider) {
      throw new BadRequestException(`You registered with ${formatUserProvider(userByEmail.provider)}, login with that provider`);
    }

    return userByEmail;
  }

  async registerLocal(registerDTO: RegisterLocalDTO): Promise<User> {
    const userFound = await this.userService.validateEmailAndUsername(registerDTO.email, registerDTO.username);

    if (userFound) {
      if (userFound.email === registerDTO.email) {
        throw new ConflictException('Email already exists');
      }
      if (userFound.username === registerDTO.username) {
        throw new ConflictException('Username already exists');
      }
    }

    const hashedPassword = await this.userService.hashPassword(registerDTO.password);

    return await this.userService.create({
      ...registerDTO,
      password: hashedPassword,
      provider: UserProviders.LOCAL,
    });
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userRepository.createQueryBuilder('user').addSelect('user.password').where('email = :email', { email }).getOne();

    if (!user) {
      throw new BadRequestException('The email or password is incorrect');
    }

    if (user.provider !== UserProviders.LOCAL) {
      throw new BadRequestException(`You registered with ${formatUserProvider(user.provider)}, login with that provider`);
    }

    const passwordsMatch = await this.comparePassword(password, user.password);

    if (!passwordsMatch) {
      throw new BadRequestException('The email or password is incorrect');
    }

    user.password = undefined;
    return user;
  }
}
