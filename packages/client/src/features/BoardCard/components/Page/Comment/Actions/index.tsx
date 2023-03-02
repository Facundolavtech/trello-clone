import { FC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import Delete from './Delete';
import Edit from './Edit';

type Props = {
  commentId: string;
};

const Actions: FC<Props> = ({ commentId }) => {
  return (
    <HStack spacing="4px">
      <Edit commentId={commentId} />
      <Text fontWeight={500} fontSize={10} color="gray.3">
        -
      </Text>
      <Delete commentId={commentId} />
    </HStack>
  );
};

export default Actions;
