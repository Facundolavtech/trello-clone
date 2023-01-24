import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { BoardMember } from '../../../entities/BoardMember.entity';
import { CreateCardDTO, UpdateCardDTO } from '../dto/card.dto';
import { BoardCard } from '../entities/Card.entity';

@Injectable()
export class BoardCardService {
  constructor(@InjectRepository(BoardCard) private cardRepository: Repository<BoardCard>) {}

  async create(boardId: string, member: BoardMember, createDTO: CreateCardDTO): Promise<BoardCard> {
    const newCard = this.cardRepository.create({
      ...createDTO,
      boardId: boardId,
      members: [member],
    });

    return await this.cardRepository.save(newCard);
  }

  async update(id: string, updateDTO: UpdateCardDTO): Promise<BoardCard> {
    const updatedCard = await this.cardRepository.createQueryBuilder().update(updateDTO).where('id = :id', { id }).returning('*').updateEntity(true).execute();

    return updatedCard.raw[0];
  }

  async delete(id: string): Promise<BoardCard> {
    const updatedCard = await this.cardRepository.createQueryBuilder().delete().where('id = :id', { id }).returning('*').execute();

    return updatedCard.raw[0];
  }

  async findAll(boardId: string): Promise<BoardCard[]> {
    return await this.cardRepository.find({
      where: { board: { id: boardId } },
      relations: ['members', 'attachments', 'labels', 'comments'],
    });
  }

  async findById(id: string): Promise<BoardCard> {
    return await this.cardRepository.findOne({ where: { id } });
  }

  async findByQuery(query: FindOptionsWhere<BoardCard>): Promise<BoardCard> {
    return await this.cardRepository.findOne({ where: query });
  }

  async updateMembers(card: BoardCard, boardMember: BoardMember, action: 'add' | 'delete'): Promise<BoardCard> {
    if (action === 'add') {
      return await this.addCardMember(card, boardMember);
    } else if (action === 'delete') {
      return await this.deleteCardMember(card, boardMember.id);
    }
  }

  async addCardMember(card: BoardCard, member: BoardMember): Promise<BoardCard> {
    card.members.push(member);

    return await this.cardRepository.save(card);
  }

  findCardMember(card: BoardCard, memberId: string): BoardMember {
    return card.members.find((member) => member.id === memberId);
  }

  async deleteCardMember(card: BoardCard, memberId: string): Promise<BoardCard> {
    const filteredMembers = card.members.filter((member) => member.id !== memberId);

    card.members = filteredMembers;

    return await this.cardRepository.save(card);
  }

  userIsCardMember(card: BoardCard, memberId: string): boolean {
    return card.members.some((member) => member.id === memberId);
  }
}
