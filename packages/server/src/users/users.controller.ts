import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@Request() req) {
    return this.usersService.getProfile(req.user.id);
  }

  //GET /users/boards

  /*@UseGuards(AuthGuard('jwt'))
  @Get('boards')
  getUserBoards(@Request() req) {
    return this.usersService.getUserBoards(req.user.id);
  }*/
}
