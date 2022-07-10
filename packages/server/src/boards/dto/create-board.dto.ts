import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsBoolean()
  visible?: boolean;

  @IsUrl()
  cover?: string;

  @IsString()
  description?: string;
}
