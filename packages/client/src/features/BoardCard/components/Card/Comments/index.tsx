import { FC } from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdInsertComment } from 'react-icons/md';
import { FontFamily } from 'theme/constants';

type Props = {
  length: number;
};

const Comments: FC<Props> = ({ length }) => {
  return (
    <HStack spacing="7px">
      <Icon as={MdInsertComment} fontSize={13} color="gray.4" />
      <Text fontSize={10} fontWeight={500} color="gray.4" fontFamily={FontFamily.NotoSans}>
        {length}
      </Text>
    </HStack>
  );
};

export default Comments;
