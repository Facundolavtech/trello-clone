import { Controller, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleGuard } from '../guards/google.guard';
import { Response } from 'express';
import { LocalAuthGuard } from '../guards/local.guard';
import { RegisterGuard } from '../guards/register.guard';
import { AuthService } from '../services/auth.service';
import { AuthenticatedRequest } from '../../../common/types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('local/login')
  loginLocal(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const user = req.user;

    const token = this.authService.signJwt({
      id: user.id,
      email: user.email,
    });

    return res.json({ token });
  }

  @UseGuards(RegisterGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post('local/register')
  registerLocal(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const user = req.user;

    const token = this.authService.signJwt({
      id: user.id,
      email: user.email,
    });

    return res.json({ token });
  }

  @HttpCode(HttpStatus.OK)
  @Post('google')
  @UseGuards(GoogleGuard)
  async auth(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const user = req.user;

    const token = this.authService.signJwt({
      id: user.id,
      email: user.email,
    });

    return res.json({ token });
  }
}
