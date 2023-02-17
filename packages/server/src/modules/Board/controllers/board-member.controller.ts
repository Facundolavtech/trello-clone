import { Controller, HttpCode, HttpStatus, Post, UseGuards, Delete, Param, Body, Req, BadRequestException, NotFoundException } from '@nestjs/common';
import { CustomUUIDPipe } from '../../../common/pipes/uuid.pipe';
import { AuthenticatedRequest } from '../../../common/types';
import { AuthenticatedGuard } from '../../Auth/guards/auth.guard';
import { UserService } from '../../User/services/user.service';
import { HandleBoardMemberDTO } from '../dto/update.dto';
import { BoardAdminGuard } from '../guards/board-admin.guard';
import { BoardMemberGuard } from '../guards/board-member.guard';
import { BoardMemberService } from '../services/board-member.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard, BoardAdminGuard)
@Controller('boards/:boardId/members')
export class BoardMemberController {
  constructor(private userService: UserService, private boardMemberService: BoardMemberService) {}

  @HttpCode(HttpStatus.OK)
  @Post('add')
  async addMember(@Param('boardId', CustomUUIDPipe) id: string, @Req() req: AuthenticatedRequest, @Body() handleMemberDTO: HandleBoardMemberDTO) {
    const user = req.user;

    if (user.id === handleMemberDTO.userId) {
      throw new BadRequestException("You can't add yourself to board");
    }

    const userById = await this.userService.findById(handleMemberDTO.userId);

    if (!userById) {
      throw new NotFoundException('The user does not exists');
    }

    const userIsBoardMember = await this.boardMemberService.userIsBoardMember(id, handleMemberDTO.userId);

    if (userIsBoardMember) {
      throw new BadRequestException('User already be in the board');
    }

    return await this.boardMemberService.updateMembers(id, handleMemberDTO.userId, 'add');
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete')
  async deleteMember(@Param('boardId', CustomUUIDPipe) id: string, @Req() req: AuthenticatedRequest, @Body() handleMemberDTO: HandleBoardMemberDTO) {
    const user = req.user;

    if (user.id === handleMemberDTO.userId) {
      throw new BadRequestException("You can't remove yourself to board");
    }

    const userById = await this.userService.findById(handleMemberDTO.userId);

    if (!userById) {
      throw new NotFoundException('The user does not exists');
    }

    const userIsBoardMember = await this.boardMemberService.userIsBoardMember(id, handleMemberDTO.userId);

    if (!userIsBoardMember) {
      throw new BadRequestException('User is not be in the board');
    }

    return await this.boardMemberService.updateMembers(id, handleMemberDTO.userId, 'delete');
  }
}
