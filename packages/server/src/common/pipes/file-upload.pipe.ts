import { PipeTransform, Injectable, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class FileUploadPipe implements PipeTransform<Express.Multer.File> {
  private readonly maxFileSize = 4194304;
  private readonly maxFileSizeInMB = this.maxFileSize / 1024 / 1024;
  private readonly acceptedMimeTypes = [
    'text/plain',
    'text/html',
    'text/css',
    'text/javascript',
    'application/json',
    'application/xml',
    'application/pdf',
    'image/png',
    'image/jpeg',
    'image/gif',
    'application/mspowerpoint',
    'application/x-rar-compressed',
    'application/x-zip-compressed',
    'image/svg+xml',
  ];

  async transform(file: Express.Multer.File) {
    const fileTypeIsValid = this.acceptedMimeTypes.find((type) => type === file.mimetype);

    if (!fileTypeIsValid) {
      throw new UnprocessableEntityException('The file type is invalid');
    }

    if (file.size > this.maxFileSize) {
      throw new UnprocessableEntityException(`The file is very large, the maximum allowed is ${this.maxFileSizeInMB} MB`);
    }

    return file;
  }
}
