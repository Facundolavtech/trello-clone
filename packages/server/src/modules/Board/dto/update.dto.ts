import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches, IsUUID, Length } from 'class-validator';
import { BoardVisibility } from '../entities/Board.entity';

export class UpdateBoardDTO {
  @IsOptional()
  @IsString({ message: 'Error: Board title is not valid' })
  @Length(6, 32, { message: 'Error: Board title must have between 6 and 32 characters' })
  title?: string;

  @IsOptional()
  @IsEnum(BoardVisibility, { message: 'Error: Board visibility is not valid' })
  visibility: BoardVisibility;

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
