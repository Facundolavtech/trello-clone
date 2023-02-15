import { Heading } from '@chakra-ui/react';
import useBoard from '../../hooks/useBoard';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';
import Loading from './Loading';

const BoardTitle = () => {
  const boardId = useBoardIdFromRoute();

  const state = useBoard({ id: boardId });

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
