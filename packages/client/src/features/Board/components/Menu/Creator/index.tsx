import { FC } from 'react';
import { VStack, HStack, Icon, Text } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { FontFamily } from 'theme/constants';
import { IBoardAdmin } from 'models/board.model';
import Avatar from 'components/Avatar';
import formatTimestampToDate from 'utils/formatTimestampToDate';

type Props = {
  creator: IBoardAdmin;
  createdAt: number;
};

const Creator: FC<Props> = ({ creator, createdAt }) => {
  return (
    <VStack spacing="13px" width="full" alignItems="flex-start">
      <HStack spacing="6px" width="full" justifyContent="flex-start">
        <Icon as={FaUserCircle} fontSize={10} color="gray.4" />
        <Text color="gray.4" fontWeight={600} fontSize={10}>
          Made by
        </Text>
      </HStack>
      <HStack spacing="13px">
        <Avatar width="32px" height="32px" name={creator.name} src={creator.picture || ''} bg={creator.picture ? 'transparent' : '#C4C4C4'} />
        <VStack spacing="2px" alignItems="flex-start">
          <Text color="gray.1" fontWeight={600} fontSize={12}>
            {creator.name}
          </Text>
          <Text as="time" fontSize={10} fontWeight={600} fontFamily={FontFamily.NotoSans} color="gray.4">
            on {formatTimestampToDate(createdAt, 'd MMMM, yyyy')}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Creator;
