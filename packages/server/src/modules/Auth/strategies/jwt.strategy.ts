import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import config from '../../../config';
import { ConfigType } from '@nestjs/config';
import { IJwtPayload } from '../types';
import { UserService } from '../../User/services/user.service';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) readonly configService: ConfigType<typeof config>, private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT, ExtractJwt.fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: configService.auth.jwt.secret,
    });
  }

  private static extractJWT(req: Request): string | null {
    let data: string = req?.cookies['thullo:sid'];

    if (!data) {
      return null;
    }

    return data;
  }

  async validate(payload: IJwtPayload) {
    const user = await this.userService.findById(payload.id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
