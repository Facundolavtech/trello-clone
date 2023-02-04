import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCardCommentDTO {
  @IsNotEmpty({ message: 'Card comment content is required' })
  @IsString({ message: 'Error: Card comment content is not valid' })
  @MinLength(6, { message: 'Error: Card comment content must contain a minimum of 6 characters' })
  content: string;
}

export class UpdateCardCommentDTO {
  @IsOptional()
  @IsString({ message: 'Error: Card comment content is not valid' })
  @MinLength(6, { message: 'Error: Card comment content must contain a minimum of 6 characters' })
  content?: string;
}
