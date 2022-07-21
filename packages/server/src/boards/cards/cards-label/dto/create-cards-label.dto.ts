import { IsHexColor, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCardsLabelDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  name: string;

  @IsNotEmpty()
  @IsHexColor()
  color: string;
}
