import { FC } from 'react';
import { VStack, Flex, Box } from '@chakra-ui/react';
import { IBoardList } from '../../../../models/board-list.model';
import Cards from '../../../BoardCard/components/Cards';
import OptionsMenu from '../OptionsMenu';
import CreateCardMenu from '../../../BoardCard/components/CreateMenu';
import Title from './Title';

type Props = {
  list: IBoardList;
};

const List: FC<Props> = ({ list }) => {
  return (
    <VStack
      width="259px"
      minWidth="259px"
      height="full"
      key={list.id}
      overflowY="scroll"
      overflowX="hidden"
      pb="17px"
      __css={{
        '::-webkit-scrollbar': {
          height: '5px',
          width: '5px',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'gray.5',
          borderRadius: 9999,
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'gray.4',
        },
      }}
    >
      <VStack spacing="28px" alignItems="flex-start" width="full" px="6px">
        <VStack spacing="17px" alignItems="flex-start" width="full">
          <Flex width="full" justifyContent="space-between" alignItems="center">
            <Title title={list.name} />
            <OptionsMenu list={list} />
          </Flex>
          <Cards cards={list.cards} />
        </VStack>
        <Box width="full">
          <CreateCardMenu listId={list.id} />
        </Box>
      </VStack>
    </VStack>
  );
};

export default List;
