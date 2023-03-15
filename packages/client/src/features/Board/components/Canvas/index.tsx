import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';

type Props = {
  children: ReactNode;
};

const BoardCanvas: FC<Props> = ({ children }) => {
  const boardId = useBoardIdFromRoute();

  const { data: board } = useBoard({ id: boardId });

  return (
    <Box
      display="flex"
      width="100%"
      gap="35px"
      position="relative"
      overflowX="scroll"
      overflowY="hidden"
      height={board ? 480 : 'auto'}
      alignItems="flex-start"
      backdropFilter="blur(10px)"
      borderRadius="8px"
      as="section"
      padding={8}
      backgroundColor={board ? 'rgba(248, 248, 248, 0.7)' : 'none'}
      className="custom__scrollbar"
    >
      {children}
    </Box>
  );
};

export default BoardCanvas;
