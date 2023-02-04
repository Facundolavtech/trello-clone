import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateBoardDTO {
  @IsNotEmpty({ message: 'Error: Board title is required' })
  @IsString({ message: 'Error: Board title is not valid' })
  title: string;

  @IsNotEmpty({ message: 'Error: Board privacy is required' })
  @IsBoolean({ message: 'Error: Board privacy is not valid' })
  isPrivate: boolean;

  @IsNotEmpty({ message: 'Error: Board description is required' })
  @IsString({ message: 'Error: Board description is not valid' })
  description: string;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Board cover needs to be a valid Unsplash URL' })
  cover?: string;
}
