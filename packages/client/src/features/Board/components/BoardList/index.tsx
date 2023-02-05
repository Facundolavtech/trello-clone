import { SimpleGrid } from '@chakra-ui/react';
import BoardCard from './Card';
import Loading from './Loading';
import Error from './Error';
import useBoards from '../../hooks/useBoards';

const BoardList = () => {
  const { isLoading, error, data } = useBoards();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
      {data?.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </SimpleGrid>
  );
};

export default BoardList;
