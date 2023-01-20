import { IsBoolean, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateBoardDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  title?: string;

  @IsOptional()
  @IsBoolean({ message: 'Error: The field value is not valid' })
  visible?: boolean;

  @IsOptional()
  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;

  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  description?: string;
}
