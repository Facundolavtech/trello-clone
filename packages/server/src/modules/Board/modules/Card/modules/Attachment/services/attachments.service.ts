import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Repository } from 'typeorm';
import { storage } from '../../../../../../../libs/firebase';
import { BoardCardAttachment } from '../entities/Attachment.entity';

@Injectable()
export class CardAttachmentService {
  constructor(
    @InjectRepository(BoardCardAttachment)
    private cardAttachmentRepository: Repository<BoardCardAttachment>
  ) {}

  async upload(cardId: string, file: Express.Multer.File) {
    const attachmentExists = await this.cardAttachmentRepository.findOne({
      name: file.originalname,
    });

    if (attachmentExists) {
      throw new BadRequestException('Already attachment exists with same name');
    }

    const storageRef = ref(storage, `cards_attachments/${cardId}/${file.originalname}`);

    const snapshot = await uploadBytes(storageRef, file.buffer, {
      contentType: file.mimetype,
    });

    const fileUrl = await getDownloadURL(snapshot.ref);

    const newAttachment = this.cardAttachmentRepository.create({
      card: cardId,
      name: file.originalname,
      type: file.mimetype,
      url: fileUrl,
    });

    await this.cardAttachmentRepository.save(newAttachment);

    return newAttachment;
  }

  async findAll(cardId: string) {
    const attachments = await this.cardAttachmentRepository.find({
      where: { card: cardId },
    });

    return attachments;
  }

  async findOne(attachmentId: string) {
    const attachment = await this.cardAttachmentRepository.findOne({
      id: attachmentId,
    });

    if (!attachment) {
      throw new NotFoundException('The attachment does not exists');
    }

    return attachment;
  }

  async remove(attachmentId: string, attachmentPath: string) {
    const attachment = await this.cardAttachmentRepository.findOne({
      id: attachmentId,
    });

    if (!attachment) {
      throw new NotFoundException('The attachment does not exists');
    }

    const attachmentRef = ref(storage, `${attachmentPath}/${attachment.name}`);

    try {
      await this.cardAttachmentRepository.delete(attachment);
      await deleteObject(attachmentRef);

      return {
        statusCode: 200,
        message: 'Attachment deleted',
      };
    } catch {
      throw new NotFoundException('File not found');
    }
  }
}
