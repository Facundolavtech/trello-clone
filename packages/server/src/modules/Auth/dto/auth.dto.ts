import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { UserProviders } from '../../User/constants';

export class LoginUserDTO {
  @IsEmail({}, { message: 'Error: Enter a valid email' })
  @IsString({ message: 'Error: Email must be text' })
  email: string;

  @Length(6, 50, { message: 'Error: Password must be between 6 and 50 characters' })
  @IsString({ message: 'Error: Password must be text' })
  password: string;
}

export class RegisterUserDTO extends PartialType(LoginUserDTO) {
  @IsEnum(UserProviders)
  @IsString({ message: 'Error: Providers must be text' })
  provider?: UserProviders;

  @IsOptional()
  @IsString({ message: 'Error: Provider id must be text' })
  providerId?: string;

  @IsNotEmpty({ message: 'Error: Username is required' })
  @IsString({ message: 'Error: Username must be text' })
  username: string;

  @IsNotEmpty({ message: 'Error: Name is required' })
  @IsString({ message: 'Error: Name must be text' })
  name: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: Picture must be URL' })
  @IsString({ message: 'Error: Picture URL must be text' })
  picture?: string;
}
