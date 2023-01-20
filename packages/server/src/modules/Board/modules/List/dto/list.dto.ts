import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateListDTO {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  name: string;
}

export class UpdateListDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  name?: string;
}
