import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';

@Injectable()
export class BoardMemberGuard implements CanActivate {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  canActivate(
    ctx: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = ctx.switchToHttp().getRequest();

    const userId = request.user.id;
    const boardId = request.params.boardId;

    if (
      !boardId.match(
        /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
      )
    ) {
      throw new BadRequestException('Please enter a valid board id');
    }

    return this.boardRepository
      .findOne({ id: boardId }, { relations: ['members'] })
      .then((board: Board) => {
        if (!board) {
          throw new NotFoundException('Board does not exists');
        }

        if (!board.members.find((member) => member.id === userId)) {
          throw new UnauthorizedException('You are not a member of this board');
        }

        return true;
      });
  }
}
