import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID } from 'class-validator';

export class UpdateBoardDTO {
  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  title?: string;

  @IsOptional()
  @IsBoolean({ message: 'Error: The field value is not valid' })
  visible?: boolean;

  @IsOptional()
  @IsUrl({}, { message: 'Error: The field value is not valid' })
  cover?: string;

  @IsOptional()
  @IsString({ message: 'Error: The field value is not valid' })
  description?: string;
}

export class HandleBoardMemberDTO {
  @IsNotEmpty({ message: 'Error: The user id is requiered' })
  @IsUUID(4, { message: 'Error: The user id is not valid' })
  userId: string;
}
