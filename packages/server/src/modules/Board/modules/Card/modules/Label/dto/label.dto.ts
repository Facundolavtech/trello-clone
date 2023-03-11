import { IsHexColor, IsIn, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

const availableColors = ['#219653', '#F2C94C', '#F2994A', '#EB5757', '#2F80ED', '#56CCF2', '#6FCF97', '#333333', '#4F4F4F', '#828282', '#BDBDBD', '#E0E0E0'];

export class CreateCardLabelDTO {
  @IsNotEmpty({ message: 'Error: Card label name required' })
  @IsString({ message: 'Error: Card label name is not valid' })
  @MinLength(4, { message: 'Error: Card label name must contain a minimum of 4 characters' })
  @MaxLength(12, { message: 'Error: Card label name must contain a maximum of 12 characters' })
  name: string;

  @IsNotEmpty({ message: 'Error: Card label color is required' })
  @IsHexColor({ message: 'Error: Card label color is not valid' })
  @IsIn(availableColors, {
    message: 'Error: Card label color is not valid',
  })
  color: string;
}
