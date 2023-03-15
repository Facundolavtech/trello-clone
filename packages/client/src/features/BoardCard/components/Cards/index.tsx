import { FC } from 'react';
import { VStack } from '@chakra-ui/react';
import { IBoardListCard } from 'models/board-list.model';
import sortArr from 'utils/sortArr';
import Card from 'features/BoardCard/components/Card';

type Props = {
  cards: IBoardListCard[];
};

const Cards: FC<Props> = ({ cards }) => {
  return (
    <VStack width="full" spacing="24px" as="section">
      {sortArr(cards, 'createdAt').map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </VStack>
  );
};

export default Cards;
