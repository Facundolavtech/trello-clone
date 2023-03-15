import { Box, Divider, Heading } from '@chakra-ui/react';
import { HeaderStyles } from 'components/Dashboard/Header';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';
import Loading from 'features/Board/components/Title/Loading';

const BoardTitle = () => {
  const boardId = useBoardIdFromRoute();

  const { error, data: board } = useBoard({ id: boardId });

  if (error) {
    return <Box width="60px" />;
  }

  if (board) {
    return (
      <>
        <Heading maxWidth="120px" className="preventTextOverflow" color="gray.1" fontSize={18} fontWeight={500}>
          {board.title}
        </Heading>
        <Divider orientation="vertical" height={(HeaderStyles.height * 50) / 100} color="#df4d4d" />
      </>
    );
  }

  return <Loading />;
};

export default BoardTitle;
