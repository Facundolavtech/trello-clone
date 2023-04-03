import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

const BoardCanvas: FC<Props> = ({ children }) => {
  return (
    <Box
      display="flex"
      width="100%"
      gap="35px"
      position="relative"
      overflowX="scroll"
      overflowY="hidden"
      height={480}
      alignItems="flex-start"
      borderRadius="35px"
      as="section"
      padding={8}
      backgroundColor="#F8F9FD"
      className="custom__scrollbar"
    >
      {children}
    </Box>
  );
};

export default BoardCanvas;
