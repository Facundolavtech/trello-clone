import { BadRequestException, Controller, Get, HttpCode, HttpStatus, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleGuard } from '../guards/google.guard';
import { Request, Response } from 'express';
import { LocalAuthGuard } from '../guards/local.guard';
import { AuthenticatedGuard } from '../guards/auth.guard';
import { ConfigType } from '@nestjs/config';
import { RegisterGuard } from '../guards/register.guard';
import config from '../../../config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(config.KEY) private configService: ConfigType<typeof config>) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('local/login')
  loginLocal(@Res() res: Response) {
    return res.send('OK');
  }

  @UseGuards(RegisterGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('local/register')
  registerLocal(@Res() res: Response) {
    return res.send('OK');
  }

  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Get('status')
  async getAuthStatus(@Res() res: Response) {
    return res.send('OK');
  }

  @HttpCode(HttpStatus.OK)
  @Post('google')
  @UseGuards(GoogleGuard)
  async auth(@Res() res: Response) {
    return res.send('OK');
  }

  @HttpCode(HttpStatus.OK)
  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    if (!req.isAuthenticated()) {
      throw new BadRequestException('You do not have an active session');
    }

    req.session.destroy(() => {
      res.clearCookie(this.configService.auth.session.cookieName);
      return res.send('OK');
    });
  }
}
