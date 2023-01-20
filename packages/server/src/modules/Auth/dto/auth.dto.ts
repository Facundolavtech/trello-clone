import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, Length } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { UserProviders } from '../../User/constants';

export class LoginUserDTO {
  @IsEmail({}, { message: 'Error: Enter a valid email' })
  @IsString({ message: 'Error: The field value is not valid' })
  email: string;

  @Length(6, 32, { message: 'Error: Password must be between 6 and 32 characters' })
  @IsString({ message: 'Error: The field value is not valid' })
  password: string;
}

export class RegisterUserDTO extends PartialType(LoginUserDTO) {
  @IsEnum(UserProviders)
  @IsString({ message: 'Error: The field value is not valid' })
  provider?: UserProviders;

  @IsOptional()
  @IsString({ message: 'Error: Provider ID is not valid' })
  providerId?: string;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  username: string;

  @IsNotEmpty({ message: 'Error: The field is required' })
  @IsString({ message: 'Error: The field value is not valid' })
  name: string;

  @IsOptional()
  @IsUrl({}, { message: 'Error: Picture must be valid URL' })
  @IsString({ message: 'Error: The field value is not valid' })
  picture?: string;
}
