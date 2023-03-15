import { SimpleGrid } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Grid: FC<Props> = ({ children }) => {
  return (
    <SimpleGrid
      columns={3}
      gap={4}
      width="full"
      height="full"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: 0,
        },
        '&::-webkit-scrollbar-track': {
          width: 0,
        },
      }}
    >
      {children}
    </SimpleGrid>
  );
};

export default Grid;
