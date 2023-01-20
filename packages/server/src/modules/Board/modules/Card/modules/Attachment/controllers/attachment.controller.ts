import {
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { CardAttachmentService } from '../services/attachments.service';

@Controller('cards/attachments/:boardId/:cardId')
export class CardAttachmentController {
  constructor(private readonly cardAttachmentService: CardAttachmentService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('cardId') cardId: string,
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
    return this.cardAttachmentService.upload(cardId, file);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll')
  findAll(@Param('cardId') cardId: string) {
    return this.cardAttachmentService.findAll(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:attachmentId')
  findOne(@Param('attachmentId') attachmentId: string) {
    return this.cardAttachmentService.findOne(attachmentId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:attachmentId')
  remove(@Param('cardId') cardId: string, @Param('attachmentId') attachmentId: string) {
    const attachmentPath = `cards_attachments/${cardId}`;

    return this.cardAttachmentService.remove(attachmentId, attachmentPath);
  }
}
