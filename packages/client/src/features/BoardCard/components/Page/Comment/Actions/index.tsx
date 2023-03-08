import { FC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import Delete from './Delete';
import Edit from './Edit';

type Props = {
  id: string;
  content: string;
};

const Actions: FC<Props> = ({ id, content }) => {
  return (
    <HStack spacing="4px">
      <Edit content={content} id={id} />
      <Text fontWeight={500} fontSize={10} color="gray.3">
        -
      </Text>
      <Delete id={id} />
    </HStack>
  );
};

export default Actions;
