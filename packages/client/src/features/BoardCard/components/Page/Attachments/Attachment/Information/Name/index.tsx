import { Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  name: string;
};

const Name: FC<Props> = ({ name }) => {
  return (
    <Text color="black" fontSize={10} fontWeight={500}>
      {name}
    </Text>
  );
};

export default Name;
