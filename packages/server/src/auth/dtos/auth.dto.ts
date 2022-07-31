import { IsEmail, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  provider: string;

  @IsString()
  providerId: string;

  @IsString()
  username: string;

  @IsString()
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  picture: string;
}
