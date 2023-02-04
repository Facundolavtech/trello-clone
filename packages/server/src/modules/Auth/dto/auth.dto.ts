import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { UserProviders } from '../../User/constants';

export class LoginDTO {
  @IsEmail({}, { message: 'Error: Email format is not valid' })
  email: string;

  @Length(6, 32, { message: 'Error: Password must be between 6 and 32 characters' })
  @IsString({ message: 'Error: Password is not valid' })
  password: string;
}

export class RegisterLocalDTO extends PartialType(LoginDTO) {
  @IsNotEmpty({ message: 'Error: User provider is required' })
  @IsEnum(UserProviders)
  @IsString({ message: 'Error: User provider is not valid' })
  provider: UserProviders;

  @IsNotEmpty({ message: 'Error: Username is required' })
  @IsString({ message: 'Error: Username is not valid' })
  username: string;

  @IsNotEmpty({ message: 'Error: Name is required' })
  @IsString({ message: 'Error: Name is not valid' })
  name: string;
}

export class RegisterWithProviderDTO extends PartialType(RegisterLocalDTO) {
  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsEnum(UserProviders)
  @IsString({ message: 'Error: The field value is not valid' })
  provider: UserProviders;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: Provider ID is not valid' })
  providerId?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: Picture must be valid URL' })
  @IsString({ message: 'Error: The field value is not valid' })
  picture?: string;
}
