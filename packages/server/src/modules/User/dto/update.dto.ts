import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  @Length(6, 32, { message: 'Error: Password must be between 6 and 32 characters' })
  password?: string;
}
