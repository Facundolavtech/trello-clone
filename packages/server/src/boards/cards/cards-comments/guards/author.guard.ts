import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardComment } from '../entities/card-comment.entity';

@Injectable()
export class CardCommentAuthorGuard implements CanActivate {
  constructor(
    @InjectRepository(CardComment)
    private cardCommentRepository: Repository<CardComment>,
  ) {}

  canActivate(ctx: ExecutionContext): any {
    const request = ctx.switchToHttp().getRequest();
    const commentId = request.params.commentId;
    const userId = request.user.id;

    return this.cardCommentRepository
      .findOne({ id: commentId }, { relations: ['author'] })
      .then((comment) => {
        if (!comment) {
          throw new NotFoundException('Card comment does not exists');
        }

        if (comment.author.id !== userId) {
          throw new UnauthorizedException('You are not the comment author');
        }

        return true;
      });
  }
}
