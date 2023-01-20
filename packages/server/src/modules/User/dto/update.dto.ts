import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString({ message: 'Error: Password must be text' })
  @Length(6, 50, { message: 'Error: Password must be between 6 and 50 characters' })
  password?: string;
}
