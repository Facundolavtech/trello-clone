import { IsHexColor, IsIn, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

const availableColors = ['#219653', '#F2C94C', '#F2994A', '#EB5757', '#2F80ED', '#56CCF2', '#6FCF97', '#333333', '#4F4F4F', '#828282', '#BDBDBD', '#E0E0E0'];

export class CreateCardLabelDTO {
  @IsNotEmpty({ message: 'Error: Card label name required' })
  @IsString({ message: 'Error: Card label name is not valid' })
  @MaxLength(12, { message: 'Error: Card label name must contain a maximum of 12 characters' })
  name: string;

  @IsNotEmpty({ message: 'Error: Card label color is required' })
  @IsHexColor({ message: 'Error: Card label color is not valid' })
  @IsIn(availableColors, {
    message: 'Error: Card label color is not valid',
  })
  color: string;
}

export class UpdateCardLabelDTO {
  @IsOptional()
  @IsString({ message: 'Error: Card label name is not valid' })
  @MaxLength(12, { message: 'Error: Card label name must contain a maximum of 12 characters' })
  name?: string;

  @IsOptional()
  @IsHexColor({ message: 'Error: Card label color is not valid' })
  @IsIn(availableColors, {
    message: 'Error: Card label color is not valid',
  })
  color?: string;
}
