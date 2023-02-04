import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString({ message: 'Error: User password is not valid' })
  @Length(6, 32, { message: 'Error: User password must be between 6 and 32 characters' })
  password?: string;
}
