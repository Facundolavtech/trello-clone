import { PipeTransform, ArgumentMetadata, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CustomUUIDPipe implements PipeTransform<string> {
  private readonly uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  async transform(value: string, metadata: ArgumentMetadata) {
    if (!this.uuidRegex.test(value)) {
      throw new BadRequestException('Error: El tipo de ID es invalido');
    }
    return value;
  }
}
