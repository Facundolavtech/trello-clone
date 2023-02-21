import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { IBoardListCard } from '../../../../models/board-list.model';
import Card from '../Card';

type Props = {
  cards: IBoardListCard[];
};

const Cards: FC<Props> = ({ cards }) => {
  return (
    <VStack width="full" spacing="24px">
      {cards
        .sort((a, b) => a.createdAt - b.createdAt)
        .map((card) => {
          return <Card key={card.id} card={card} />;
        })}
    </VStack>
  );
};

export default Cards;
