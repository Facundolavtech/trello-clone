import { FC, ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const Body: FC<Props> = ({ children }) => {
  return (
    <VStack alignItems="flex-start" spacing="17px" width="full">
      {children}
    </VStack>
  );
};

export default Body;
