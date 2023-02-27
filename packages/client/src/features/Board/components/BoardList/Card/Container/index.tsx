import { FC, ReactNode } from 'react';
import { VStack } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const BoardCardContainer: FC<Props> = ({ children }) => {
  return <VStack spacing="21px">{children}</VStack>;
};

export default BoardCardContainer;
