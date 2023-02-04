import { VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { BoardListCard } from '../../../../models/board-list.model';
import Card from '../Card';

type Props = {
  cards: BoardListCard[];
};

const Cards: FC<Props> = ({ cards }) => {
  return (
    <VStack width="full" spacing="24px">
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </VStack>
  );
};

export default Cards;
