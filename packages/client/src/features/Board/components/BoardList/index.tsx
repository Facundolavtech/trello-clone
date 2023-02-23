import { SimpleGrid } from '@chakra-ui/react';
import BoardCard from './Card';
import Loading from './Loading';
import Error from './Error';
import useBoards from '../../hooks/useBoards';

const BoardList = () => {
  const { isLoading, error, data: boards } = useBoards();

  if (error) {
    return <Error />;
  }

  if (isLoading || !boards) {
    return <Loading />;
  }

  return (
    <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
      {boards.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </SimpleGrid>
  );
};

export default BoardList;
