import { Body, Controller, Get, HttpCode, HttpStatus, Put, Req } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthenticatedRequest } from '../../../common/types';
import { AuthenticatedGuard } from '../../Auth/guards/auth.guard';
import { UpdateUserDTO } from '../dto/update.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return this.userService.formatUserProfile(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Put('changePassword')
  async updateProfile(@Req() req: AuthenticatedRequest, @Body() updateDTO: UpdateUserDTO) {
    const userId = req.user.id;

    const hashedPassword = await this.userService.hashPassword(updateDTO.password);

    return await this.userService.changePassword(userId, hashedPassword);
  }
}
