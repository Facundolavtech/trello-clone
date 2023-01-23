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
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from '../../../../../../Auth/guards/auth.guard';
import { BoardMemberGuard } from '../../../../../guards/board-member.guard';
import { CardAttachmentService } from '../services/attachments.service';

@UseGuards(AuthenticatedGuard, BoardMemberGuard)
@Controller('boards/:boardId/cards/:cardId/attachments')
export class CardAttachmentController {
  constructor(private readonly cardAttachmentService: CardAttachmentService) {}

  @HttpCode(HttpStatus.CREATED)
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
    return await this.cardAttachmentService.upload(cardId, file);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Param('cardId') cardId: string) {
    return await this.cardAttachmentService.findAll(cardId);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cardAttachmentService.findById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  async delete(@Param('cardId') cardId: string, @Param('id') id: string) {
    const attachmentPath = `cards_attachments/${cardId}`;

    const attachmentById = await this.cardAttachmentService.findById(id);

    if (!attachmentById) {
      throw new NotFoundException('The attachment does not exists');
    }

    return await this.cardAttachmentService.delete(attachmentById, attachmentPath);
  }
}
