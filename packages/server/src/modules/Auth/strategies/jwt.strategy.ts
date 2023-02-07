import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import config from '../../../config';
import { ConfigType } from '@nestjs/config';
import { IJwtPayload } from '../types';
import { UserService } from '../../User/services/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(config.KEY) readonly configService: ConfigType<typeof config>, private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.auth.jwt.secret,
    });
  }

  async validate(payload: IJwtPayload) {
    const user = await this.userService.findById(payload.id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
