import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardMemberGuard } from '../../guards/board-member.guard';
import { CardsLabelService } from './cards-label.service';
import { CreateCardsLabelDto } from './dto/create-cards-label.dto';
import { UpdateCardsLabelDto } from './dto/update-cards-label.dto';

@Controller('cards/labels/:cardId/:boardId')
export class CardsLabelController {
  constructor(private readonly cardsLabelService: CardsLabelService) {}

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Post('create')
  create(
    @Param('cardId') cardId: string,
    @Body() createCardsLabelDto: CreateCardsLabelDto,
  ) {
    return this.cardsLabelService.create(cardId, createCardsLabelDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findAll')
  findAll(@Param('cardId') cardId: string) {
    return this.cardsLabelService.findAll(cardId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Get('findOne/:labelId')
  findOne(@Param('labelId') labelId: string) {
    return this.cardsLabelService.findOne(labelId);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Put('update/:labelId')
  update(
    @Param('labelId') labelId: string,
    @Body() updateCardsLabelDto: UpdateCardsLabelDto,
  ) {
    return this.cardsLabelService.update(labelId, updateCardsLabelDto);
  }

  @UseGuards(AuthGuard('jwt'), BoardMemberGuard)
  @Delete('delete/:labelId')
  remove(@Param('labelId') labelId: string) {
    return this.cardsLabelService.remove(labelId);
  }
}
