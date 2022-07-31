import { PartialType } from '@nestjs/mapped-types';
import { AddCardMemberDto } from './add-member.dto';

export class RemoveCardMemberDto extends PartialType(AddCardMemberDto) {}
