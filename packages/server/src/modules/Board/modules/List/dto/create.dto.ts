import { IsNotEmpty, IsString } from 'class-validator';

export class CreateListDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
