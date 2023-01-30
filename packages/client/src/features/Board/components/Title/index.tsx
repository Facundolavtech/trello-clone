import { Heading } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { IBoard } from '../../../../models/board.model';

const BoardTitle = () => {
  const { data } = useQuery<IBoard>('boards/id');

  return (
    <Heading color="gray.1" fontSize={18} fontWeight={500}>
      {data?.title}
    </Heading>
  );
};

export default BoardTitle;
