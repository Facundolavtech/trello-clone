import { Text } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { useQuery } from '@tanstack/react-query';
import useBoard from '../../../features/Board/hooks/useBoard';
import BoardLayout from '../../../features/Board/layouts/BoardLayout';
import withSession from '../../../hoc/withSession';

const Board = ({ id }) => {
  const { getBoardById } = useBoard();

  const { data, isLoading, error } = useQuery([`board/${id}`], async () => await getBoardById(id));

  if (isLoading) {
    return (
      <BoardLayout>
        <Text>Loading...</Text>
      </BoardLayout>
    );
  }

  if (error) {
    return (
      <BoardLayout>
        <Text>Error</Text>
      </BoardLayout>
    );
  }

  return (
    <BoardLayout title={data?.title}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </BoardLayout>
  );
};

export default withSession(Board);

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};
