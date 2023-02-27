import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { IBoardListCard } from '../../../../models/board-list.model';
import sortArr from '../../../../utils/sortArr';
import Card from '../Card';

type Props = {
  cards: IBoardListCard[];
};

const Cards: FC<Props> = ({ cards }) => {
  return (
    <VStack width="full" spacing="24px">
      {sortArr(cards, 'createdAt').map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </VStack>
  );
};

export default Cards;
