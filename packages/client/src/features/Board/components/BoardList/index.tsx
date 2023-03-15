import { SimpleGrid } from '@chakra-ui/react';
import BoardCard from 'features/Board/components/BoardList/Card';
import Loading from 'features/Board/components/BoardList/Loading';
import Error from 'features/Board/components/BoardList/Error';
import useBoards from 'features/Board/hooks/useBoards';

const BoardList = () => {
  const { data: boards, error } = useBoards();

  if (error) {
    return <Error />;
  }

  if (boards) {
    return (
      <SimpleGrid as="section" width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
        {boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </SimpleGrid>
    );
  }

  return <Loading />;
};

export default BoardList;
