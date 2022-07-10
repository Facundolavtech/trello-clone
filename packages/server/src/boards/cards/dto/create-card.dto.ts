import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  @Length(6, 32)
  title: string;
}
