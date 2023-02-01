import { Heading, SkeletonText } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useQueryState from '../../../../hooks/useQueryState';
import { IBoard } from '../../../../models/board.model';

const BoardTitle = () => {
  const { query } = useRouter();

  const state = useQueryState<IBoard>(`board/${query.id}`);

  if (state.status === 'loading') {
    return <SkeletonText noOfLines={2}>Loading</SkeletonText>;
  }

  return (
    <Heading color="gray.1" fontSize={18} fontWeight={500}>
      {state.data?.title}
    </Heading>
  );
};

export default BoardTitle;
