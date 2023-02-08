import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches, Length } from 'class-validator';

export class CreateBoardDTO {
  @IsNotEmpty({ message: 'Error: Board title is required' })
  @IsString({ message: 'Error: Board title is not valid' })
  @Length(6, 32, { message: 'Error: Board title must have between 6 and 32 characters' })
  title: string;

  @IsNotEmpty({ message: 'Error: Board privacy is required' })
  @IsBoolean({ message: 'Error: Board privacy is not valid' })
  isPrivate: boolean;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Board cover needs to be a valid Unsplash URL' })
  cover?: string;
}
