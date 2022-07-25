import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  canActivate(ctx: ExecutionContext): any {
    const request = ctx.switchToHttp().getRequest();
    const boardId = request.params.boardId;
    const userId = request.user.id;

    return this.boardRepository
      .findOne({ id: boardId }, { relations: ['admin'] })
      .then((board: Board | undefined) => {
        if (!board) throw new NotFoundException('Board does not exists');

        if (board.admin['id'] !== userId) {
          throw new UnauthorizedException('You are not an admin of the board');
        }

        return true;
      });
  }
}
