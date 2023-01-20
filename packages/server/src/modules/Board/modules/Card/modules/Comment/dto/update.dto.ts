import { PartialType } from '@nestjs/swagger';
import { CreateBoardCardCommentDTO } from './create.dto';

export class UpdateBoardCardCommentDTO extends PartialType(CreateBoardCardCommentDTO) {}
