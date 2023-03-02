import { HStack, VStack } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import CustomCard from '../../../../components/Card';
import { AppRoutes } from '../../../../config/routes';
import { IBoardListCard } from '../../../../models/board-list.model';
import CardPage from '../Page';
import Attachments from './Attachments';
import Comments from './Comments';
import Cover from './Cover';
import Labels from './Labels';
import Members from './Members';
import Title from './Title';

type Props = {
  card: IBoardListCard;
};

const Card: FC<Props> = ({ card }) => {
  const router = useRouter();

  const onCardClick = () => {
    router.replace(`${AppRoutes.BOARD}/${card.boardId}/c/${card.id}`, undefined, { shallow: true });
    NiceModal.show(CardPage, { cardId: card.id });
  };

  return (
    <CustomCard variant="board-card" width="full" onClick={onCardClick}>
      <VStack spacing="12px" alignItems="flex-start">
        {card.cover && <Cover src={card.cover} alt={`${card.title} cover`} />}
        <Title title={card.title} />
        <Labels items={card.labels} />
        <HStack width="full" justifyContent="space-between">
          <Members members={card.members} />
          <HStack spacing="13px">
            <Comments length={card.comments.length} />
            <Attachments length={card.attachments.length} />
          </HStack>
        </HStack>
      </VStack>
    </CustomCard>
  );
};

export default Card;
