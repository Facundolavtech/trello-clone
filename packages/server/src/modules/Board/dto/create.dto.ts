import { IsNotEmpty, IsOptional, IsString, Matches, Length, IsEnum } from 'class-validator';
import { BoardVisibility } from '../entities/Board.entity';

export class CreateBoardDTO {
  @IsNotEmpty({ message: 'Error: Board title is required' })
  @IsString({ message: 'Error: Board title is not valid' })
  @Length(6, 32, { message: 'Error: Board title must have between 6 and 32 characters' })
  title: string;

  @IsNotEmpty({ message: 'Error: Board visibility is required' })
  @IsEnum(BoardVisibility, { message: 'Error: Board visibility is not valid' })
  visibility: BoardVisibility;

  @IsOptional()
  @Matches(/^https:\/\/images\.unsplash\.com\//, { message: 'Board cover needs to be a valid Unsplash URL' })
  cover?: string;
}
