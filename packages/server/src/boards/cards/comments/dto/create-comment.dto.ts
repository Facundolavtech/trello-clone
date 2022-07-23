import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCardsCommentDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  content: string;
}
