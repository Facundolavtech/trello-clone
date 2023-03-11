import { FC } from 'react';
import { VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import EditButton from '../../../../../components/Buttons/Edit';
import useCard from '../../../hooks/useCard';
import useCardList from '../../../hooks/useCardList';
import Attachments from '../Attachments';
import Comments from '../Comments';
import Cover from '../Cover';
import DescriptionContent from '../Description/Content';
import DescriptionTitle from '../Description/Title';
import Error from '../Error';
import Loading from '../Loading';
import Sidepanel from '../Sidepanel';
import Title from '../Title';
import { useCardContext } from '../../../Context';

const Content = () => {
  const { id } = useCardContext();

  const { data: card, error } = useCard({ id });
  const list = useCardList();

  if (error) {
    return <Error error={error} />;
  }

  if (card) {
    return (
      <VStack spacing="25px" width="full" maxWidth="full">
        {card.cover && <Cover src={card.cover} />}
        <SimpleGrid width="full" columns={{ base: 1, md: 2 }} templateColumns="4fr 2fr" spacing="23px">
          <VStack spacing="25px" width="full" overflowX="hidden" alignItems="flex-start">
            <VStack spacing="11px" width="full" alignItems="flex-start">
              <VStack spacing="23px" alignItems="flex-start" width="full">
                <Title title={card.title} listName={list?.name} />
                <HStack width="full" spacing="13px">
                  <DescriptionTitle />
                  <EditButton styles={{ gap: 10 }} label="Edit" onClick={() => null} />
                </HStack>
              </VStack>
              <DescriptionContent description={card.description} />
            </VStack>
            <Attachments attachments={card.attachments} />
            <Comments comments={card.comments} />
          </VStack>
          <Sidepanel />
        </SimpleGrid>
      </VStack>
    );
  }

  return <Loading />;
};

export default Content;
