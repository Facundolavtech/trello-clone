import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { CustomUUIDPipe } from '../../../common/pipes/uuid.pipe';
import { BoardService } from '../services/board.service';

@Injectable()
export class BoardExistGuard implements CanActivate {
  constructor(private boardService: BoardService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const boardId = await new CustomUUIDPipe().transform(request.params.boardId);

    if (!(await this.boardService.exist(boardId))) {
      throw new NotFoundException('The board does not exists');
    }

    return true;
  }
}
