import { FC } from 'react';
import { VStack, HStack, Icon, Text } from '@chakra-ui/react';
import { format, fromUnixTime } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FaUserCircle } from 'react-icons/fa';
import { FontFamily } from '../../../../../theme/constants';
import { IBoardAdmin } from '../../../../../models/board.model';
import Avatar from '../../../../../components/Avatar';

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
        <Avatar name={creator.name} src={creator.picture} style={{ background: creator.picture ? 'transparent' : '#C4C4C4' }} />
        <VStack spacing="2px" alignItems="flex-start">
          <Text color="gray.1" fontWeight={600} fontSize={12}>
            {creator.name}
          </Text>
          <Text fontSize={10} fontWeight={600} fontFamily={FontFamily.NotoSans} color="gray.4">
            on {format(fromUnixTime(createdAt), 'dd/MM/yyyy', { locale: enUS })}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Creator;
