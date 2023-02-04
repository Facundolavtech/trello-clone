import { IsNotEmpty, IsOptional, IsString, IsUUID, Length, Matches, MinLength } from 'class-validator';

export class CreateCardDTO {
  @IsNotEmpty({ message: 'Error: Card list ID is required' })
  @IsUUID(4, { message: 'Error: Card list ID is not valid' })
  listId: string;

  @IsNotEmpty({ message: 'Error: Card title is required' })
  @IsString({ message: 'Error: Card title is not valid' })
  @Length(6, 32, { message: 'Error: Card title must contain between 6 and 32 characters' })
  title: string;

  @IsOptional()
  @IsString({
    message: 'Error: Card description is not valid',
  })
  @MinLength(6, { message: 'Error: Card description must contain at least 6 characters' })
  description?: string;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Card cover needs to be a valid Unsplash URL' })
  cover?: string;
}

export class UpdateCardDTO {
  @IsOptional()
  @IsString({ message: 'Error: Card title is not valid' })
  @Length(6, 32, { message: 'Error: Card title must contain between 6 and 32 characters' })
  title?: string;

  @IsOptional()
  @IsString({
    message: 'Error: Card description is not valid',
  })
  @MinLength(6, { message: 'Error: Card description must contain at least 6 characters' })
  description?: string;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Card cover needs to be a valid Unsplash URL' })
  cover?: string;
}

export class HandleCardMemberDTO {
  @IsNotEmpty({ message: 'Error: The user ID is requiered' })
  @IsUUID(4, { message: 'Error: The user ID is not valid' })
  userId: string;
}
