import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBoardCardCommentDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  content: string;
}
