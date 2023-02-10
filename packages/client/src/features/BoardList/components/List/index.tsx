import { FC } from 'react';
import { Icon, Heading, HStack, Box, VStack, Text } from '@chakra-ui/react';
import { MdMoreHoriz } from 'react-icons/md';
import { BoardList } from '../../../../models/board-list.model';
import Cards from '../../../BoardCard/components/Cards';
import Button from '../../../../components/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { FontFamily } from '../../../../theme/constants';

type Props = {
  list: BoardList;
};

const List: FC<Props> = ({ list }) => {
  if (!list) return null;

  return (
    <VStack
      px="8px"
      minWidth="248px"
      height="full"
      key={list.id}
      overflowY="auto"
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
      <VStack spacing="28px" alignItems="flex-start" width="full">
        <VStack spacing="17px" alignItems="flex-start" width="full">
          <HStack width="full" justifyContent="space-between" alignItems="center">
            <Heading color="gray.1" fontWeight={500} fontSize={14}>
              {list.name}
            </Heading>
            <Box as="button" display="flex" alignItems="center">
              <Icon as={MdMoreHoriz} fontSize={16} color="gray.3" />
            </Box>
          </HStack>
          <Cards cards={list.cards} />
        </VStack>
        <Button width="full" variant="primary" style={{ background: '#DAE4FD', justifyContent: 'space-between', minHeight: '32px' }}>
          <Text color="blue.1" fontWeight={500} fontSize={12} fontFamily={FontFamily.NotoSans}>
            Add another card
          </Text>
          <Icon as={AiOutlinePlus} color="blue.1" fontSize={12} />
        </Button>
      </VStack>
    </VStack>
  );
};

export default List;
