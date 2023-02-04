import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateListDTO {
  @IsNotEmpty({ message: 'Error: Board list name is required' })
  @IsString({ message: 'Error: Board list name is not valid' })
  name: string;
}

export class UpdateListDTO {
  @IsOptional()
  @IsString({ message: 'Error: Board list name is not valid' })
  name?: string;
}
