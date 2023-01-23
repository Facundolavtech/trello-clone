import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-custom';
import { User } from '../../user/entities/User.entity';
import { RegisterLocalDTO } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RegisterStrategy extends PassportStrategy(Strategy, 'register') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<User> {
    const registerDTO: RegisterLocalDTO = req.body;
    return await this.authService.registerLocal(registerDTO);
  }
}
