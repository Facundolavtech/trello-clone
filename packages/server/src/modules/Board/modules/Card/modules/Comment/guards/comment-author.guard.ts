import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestException, UnauthorizedException } from '@nestjs/common/exceptions';
import { CustomUUIDPipe } from '../../../../../../../common/pipes/uuid.pipe';
import { CardCommentService } from '../services/comment.service';

@Injectable()
export class CommentAuthorGuard implements CanActivate {
  constructor(private cardCommentService: CardCommentService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const userId = request.user.id;
    const commentId = await new CustomUUIDPipe().transform(request.params.id);

    if (!commentId) {
      throw new BadRequestException('Specifies the comment ID');
    }

    const commentById = await this.cardCommentService.findById(commentId);

    if (!commentById) {
      throw new NotFoundException('The comment does not exists');
    }

    const isCommentAuthor = commentById.author.userId === userId;

    if (!isCommentAuthor) {
      throw new UnauthorizedException('You do not have permissions to perform this action');
    }

    request.comment = commentById;

    return true;
  }
}
