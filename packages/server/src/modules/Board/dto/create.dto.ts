import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBoardDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  title: string;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsBoolean({ message: 'Error: The field value is not valid' })
  isPrivate: boolean;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  description: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;
}
