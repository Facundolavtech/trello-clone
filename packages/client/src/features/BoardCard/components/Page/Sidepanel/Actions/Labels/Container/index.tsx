import { FC, ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <VStack spacing="13.5px" alignItems="flex-start">
      {children}
    </VStack>
  );
};

export default Container;
