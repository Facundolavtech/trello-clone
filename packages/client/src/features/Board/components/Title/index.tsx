import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useQueryState from '../../../../hooks/useQueryState';
import { IBoard } from '../../../../models/board.model';
import Loading from './Loading';

const BoardTitle = () => {
  const { query } = useRouter();

  const state = useQueryState<IBoard>(`board/${query.id}`);

  if (state.status === 'loading') {
    return <Loading />;
  }

  return (
    <Heading color="gray.1" fontSize={18} fontWeight={500}>
      {state.data?.title}
    </Heading>
  );
};

export default BoardTitle;
