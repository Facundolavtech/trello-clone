import { IsBoolean, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBoardDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  title: string;

  @IsBoolean({ message: 'Error: The field value is not valid' })
  visible?: boolean;

  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;

  @IsString({ message: 'Error: The field value is not valid' })
  description?: string;
}
