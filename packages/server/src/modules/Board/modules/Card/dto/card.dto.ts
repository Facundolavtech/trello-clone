import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl, Length, MinLength } from 'class-validator';

export class CreateCardDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  @Length(6, 32, { message: 'Error: The title must contain between 6 and 32 characters' })
  title: string;

  @IsOptional()
  @IsString({
    message: 'Error: The field value is not valid',
  })
  @MinLength(6, { message: 'Error: Description must contain at least 6 characters' })
  description?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;
}

export class UpdateCardDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  @Length(6, 32, { message: 'Error: The title must contain between 6 and 32 characters' })
  title?: string;

  @IsOptional()
  @IsString({
    message: 'Error: The field value is not valid',
  })
  @MinLength(6, { message: 'Error: Description must contain at least 6 characters' })
  description?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;
}

export class HandleCardMemberDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  @IsEmail({}, { message: 'Error: The field value is not valid' })
  email: string;
}
