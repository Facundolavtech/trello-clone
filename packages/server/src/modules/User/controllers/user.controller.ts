import { Body, Controller, Get, HttpCode, HttpStatus, Put, Req } from '@nestjs/common';
import { AuthenticatedRequest } from '../../../common/types';
import { UpdateUserDTO } from '../dto/update.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return this.userService.formatUserProfile(req.user);
  }

  @HttpCode(HttpStatus.OK)
  @Put('profile/update')
  async updateProfile(@Req() req: AuthenticatedRequest, @Body() updateDTO: UpdateUserDTO) {
    const userId = req.user.id;

    if (updateDTO.password !== undefined) {
      updateDTO.password = await this.userService.hashPassword(updateDTO.password);
    }

    return this.userService.update(userId, updateDTO);
  }
}
