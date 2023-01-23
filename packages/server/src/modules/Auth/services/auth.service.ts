import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../user/entities/User.entity';
import { Repository } from 'typeorm';
import { IAuthProviderUserDTO } from '../types';
import { UserService } from '../../User/services/user.service';
import { UserProviders } from '../../User/constants';
import formatUserProvider from '../utils/formatProvider';
import { RegisterLocalDTO } from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, @InjectRepository(User) private userRepository: Repository<User>) {}

  async comparePassword(plainPassword: string, hashPassword: string): Promise<boolean> {
    return await compare(plainPassword, hashPassword);
  }

  async loginWithProvider(userData: IAuthProviderUserDTO): Promise<User> {
    const userByEmail = await this.userService.findByEmail(userData.email);

    if (!userByEmail) {
      return await this.userService.create(userData);
    }

    if (userByEmail.provider !== userData.provider) {
      throw new UnauthorizedException(`You registered with ${formatUserProvider(userByEmail.provider)}, login with that provider`);
    }

    return userByEmail;
  }

  async registerLocal(registerDTO: RegisterLocalDTO): Promise<User> {
    const user = await this.userService.findByEmail(registerDTO.email);

    if (user) {
      throw new BadRequestException('There is already a registered user with that email');
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
