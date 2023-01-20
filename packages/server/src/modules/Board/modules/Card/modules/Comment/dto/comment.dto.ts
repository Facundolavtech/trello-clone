import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCardCommentDTO {
  @IsNotEmpty({ message: 'The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  @MinLength(6, { message: 'Error: The content must contain a minimum of 6 characters' })
  content: string;
}

export class UpdateCardCommentDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  @MinLength(6, { message: 'Error: The content must contain a minimum of 6 characters' })
  content?: string;
}
