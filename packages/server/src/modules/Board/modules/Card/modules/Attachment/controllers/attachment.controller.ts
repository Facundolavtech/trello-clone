import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  BadRequestException,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmptyBodyInterceptor } from '../../../../../../../common/interceptors/empty-body.interceptor';
import { CustomUUIDPipe } from '../../../../../../../common/pipes/uuid.pipe';
import { AuthenticatedGuard } from '../../../../../../Auth/guards/auth.guard';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { BoardCardService } from '../../../services/card.service';
import { CardAttachmentService } from '../services/attachments.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards/:cardId/attachments')
export class CardAttachmentController {
  constructor(private readonly cardAttachmentService: CardAttachmentService, private boardCardService: BoardCardService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('upload')
  @UseInterceptors(EmptyBodyInterceptor, FileInterceptor('file'))
  async uploadFile(
    @Param('cardId', CustomUUIDPipe) cardId: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000000 }),
          new FileTypeValidator({
            fileType: /(\.|\/)(gif|jpg|jpeg|txt|png|pdf|json)$/g,
          }),
        ],
      })
    )
    file: Express.Multer.File
  ) {
    const cardById = await this.boardCardService.findById(cardId);

    if (!cardById) {
      throw new NotFoundException('The card does not exists');
    }

    const attachmentByQuery = await this.cardAttachmentService.findByQuery({
      name: file.originalname,
      cardId,
    });

    if (attachmentByQuery) {
      throw new BadRequestException('An attachment with that name already exists');
    }

    return await this.cardAttachmentService.upload(cardId, file);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', CustomUUIDPipe) id: string) {
    const attachmentById = await this.cardAttachmentService.findById(id);

    if (!attachmentById) {
      throw new NotFoundException('The attachment does not exists');
    }

    return await this.cardAttachmentService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('cardId', CustomUUIDPipe) cardId: string, @Param('id') id: string) {
    const attachmentById = await this.cardAttachmentService.findById(id);

    if (!attachmentById) {
      throw new NotFoundException('The attachment does not exists');
    }

    const attachmentPath = `card_attachments/${cardId}`;

    return await this.cardAttachmentService.delete(attachmentById, attachmentPath);
  }
}
