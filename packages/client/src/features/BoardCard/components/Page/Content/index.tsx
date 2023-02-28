import { VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import EditButton from '../../../../../components/Buttons/Edit';
import useBoardIdFromRoute from '../../../../Board/hooks/useBoardIdFromRoute';
import useCard from '../../../hooks/useCard';
import useCardList from '../../../hooks/useCardList';
import Attachments from '../Attachments';
import Cover from '../Cover';
import DescriptionContent from '../Description/Content';
import DescriptionTitle from '../Description/Title';
import Error from '../Error';
import Loading from '../Loading';
import Title from '../Title';

const Content = ({ cardId }) => {
  const boardId = useBoardIdFromRoute();
  const { data: card, error } = useCard({ id: cardId });
  const list = useCardList({ cardId, boardId });

  if (error) {
    return <Error error={error} />;
  }

  if (card && list) {
    return (
      <VStack spacing="25px" width="full">
        {card.cover && <Cover src={card.cover} />}
        <SimpleGrid width="full" columns={{ base: 1, md: 2 }} templateColumns="2fr 1fr" spacing="23px">
          <VStack spacing="25px" width="full" alignItems="flex-start">
            <VStack spacing="11px" width="full" alignItems="flex-start">
              <VStack spacing="23px" alignItems="flex-start" width="full">
                <Title title={card.title} listName={list.name} />
                <HStack width="full" spacing="13px">
                  <DescriptionTitle />
                  <EditButton styles={{ gap: 10 }} label="Edit" onClick={() => null} />
                </HStack>
              </VStack>
              <DescriptionContent description={card.description} />
            </VStack>
            {card.attachments.length > 0 && <Attachments attachments={card.attachments} />}
          </VStack>
        </SimpleGrid>
      </VStack>
    );
  }

  return <Loading />;
};

export default Content;
