import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MinLength,
} from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  description?: string | null;

  @IsOptional()
  @IsUrl()
  cover?: string | null;
}
