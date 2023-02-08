import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches, IsUUID, Length } from 'class-validator';

export class UpdateBoardDTO {
  @IsOptional()
  @IsString({ message: 'Error: Board title is not valid' })
  @Length(6, 32, { message: 'Error: Board title must have between 6 and 32 characters' })
  title?: string;

  @IsOptional()
  @IsBoolean({ message: 'Error: Board privacy is not valid' })
  isPrivate?: boolean;

  @IsOptional()
  @IsString({ message: 'Error: Board description is not valid' })
  description?: string;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Board cover needs to be a valid Unsplash URL' })
  cover?: string;
}

export class HandleBoardMemberDTO {
  @IsNotEmpty({ message: 'Error: The user ID is requiered' })
  @IsUUID(4, { message: 'Error: The user ID is not valid' })
  userId: string;
}
