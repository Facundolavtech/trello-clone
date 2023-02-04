import { FC } from 'react';
import { Icon, Heading, HStack, Box, VStack } from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';
import { BoardList } from '../../../../models/board-list.model';
import Cards from '../../../BoardCard/components/Cards';

type Props = {
  list: BoardList;
};

const List: FC<Props> = ({ list }) => {
  if (!list) return null;

  return (
    <VStack>
      <HStack width={{ base: 'full', md: '240px' }} justifyContent="space-between" alignItems="center">
        <Heading color="gray.1" fontWeight={500} fontSize={14}>
          {list.name}
        </Heading>
        <Box as="button" display="flex" alignItems="center">
          <Icon as={MdMoreHoriz} fontSize={16} color="gray.3" />
        </Box>
      </HStack>
      <Cards cards={list.cards} />
    </VStack>
  );
};

export default List;
