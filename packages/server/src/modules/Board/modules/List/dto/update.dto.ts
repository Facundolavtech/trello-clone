import { PartialType } from '@nestjs/mapped-types';
import { CreateListDTO } from './create.dto';

export class UpdateListDTO extends PartialType(CreateListDTO) {}
