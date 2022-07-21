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
    const boardId = request.params.id;
    const userId = request.user.id;

    return this.boardRepository
      .findOne({ id: boardId }, { relations: ['admins'] })
      .then((board: Board | undefined) => {
        if (!board) throw new NotFoundException('Board does not exists');

        if (!board.admins.find((user) => user.id === userId))
          throw new UnauthorizedException('You are not an admin of the board');

        return true;
      });
  }
}
