import { IsHexColor, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCardLabelDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  @MaxLength(12, { message: 'Error: The name must contain a maximum of 12 characters' })
  name: string;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsHexColor({ message: 'Error: The field value is not valid' })
  color: string;
}

export class UpdateCardLabelDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  @MaxLength(12, { message: 'Error: The name must contain a maximum of 12 characters' })
  name?: string;

  @IsOptional()
  @IsHexColor({ message: 'Error: The field value is not valid' })
  color?: string;
}
