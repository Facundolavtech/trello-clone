import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AddCardMemberDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
