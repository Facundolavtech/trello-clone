import axios from 'axios';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-custom';
import { ConfigType } from '@nestjs/config';
import { AuthService } from '../services/auth.service';
import { User } from '../../user/entities/User.entity';
import config from '../../../config';
import { UserProviders } from '../../User/constants';
import { IGoogleUserDTO } from '../types';
import { generateFromEmail } from 'unique-username-generator';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>, private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<User> {
    const { token } = req.body;

    const userInfo = await axios.get(`${this.configService.auth.oauth.google.apiBaseURL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (userInfo.status !== 200) {
      throw new BadRequestException('There was an error getting user information, please log in again or try another authentication provider');
    }

    const tokenInfo = await axios.get(`${this.configService.auth.oauth.google.apiBaseURL}/tokeninfo?access_token=${token}`);

    if (tokenInfo.status !== 200) {
      throw new Error('Failed to validate token');
    }

    if (tokenInfo.data.aud !== this.configService.auth.oauth.google.clientID) {
      throw new Error('Failed to validate token');
    }

    if (tokenInfo.data.exp < Math.round(+new Date() / 1000)) {
      throw new Error('Failed to validate token');
    }

    const user: IGoogleUserDTO = {
      provider: UserProviders.GOOGLE,
      providerId: userInfo.data.sub,
      email: userInfo.data.email,
      username: `${generateFromEmail(userInfo.data.email)}`,
      name: userInfo.data.name,
      picture: userInfo.data.picture,
    };

    return await this.authService.loginWithProvider(user);
  }
}
