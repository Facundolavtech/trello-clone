import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { FindOptionsWhere, Repository } from 'typeorm';
import { storage } from '../../../../../../../libs/firebase';
import { BoardCardAttachment } from '../entities/Attachment.entity';

@Injectable()
export class CardAttachmentService {
  constructor(
    @InjectRepository(BoardCardAttachment)
    private cardAttachmentRepository: Repository<BoardCardAttachment>
  ) {}

  async upload(cardId: string, file: Express.Multer.File): Promise<BoardCardAttachment> {
    const storageRef = ref(storage, `card_attachments/${cardId}/${file.originalname}`);

    const snapshot = await uploadBytes(storageRef, file.buffer, {
      contentType: file.mimetype,
    });

    const fileUrl = await getDownloadURL(snapshot.ref);

    return await this.cardAttachmentRepository.save(
      this.cardAttachmentRepository.create({
        cardId,
        name: file.originalname,
        type: file.mimetype,
        url: fileUrl,
      })
    );
  }

  async delete(attachment: BoardCardAttachment, path: string): Promise<BoardCardAttachment> {
    try {
      const attachmentRef = ref(storage, `${path}/${attachment.name}`);

      await deleteObject(attachmentRef);
    } catch (error) {
      throw new BadRequestException('The attachment does not exist in the storage');
    } finally {
      const deletedAttachment = await this.cardAttachmentRepository.createQueryBuilder().delete().where('id = :id', { id: attachment.id }).returning('*').execute();

      return deletedAttachment.raw[0];
    }
  }

  async findAll(cardId: string): Promise<BoardCardAttachment[]> {
    return await this.cardAttachmentRepository.find({
      where: { cardId },
    });
  }

  async findById(id: string): Promise<BoardCardAttachment> {
    return await this.cardAttachmentRepository.findOne({
      where: { id },
    });
  }

  async findByQuery(query: FindOptionsWhere<BoardCardAttachment>): Promise<BoardCardAttachment> {
    return await this.cardAttachmentRepository.findOne({
      where: query,
    });
  }
}
