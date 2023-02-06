import { GetServerSidePropsContext, NextPage } from 'next';
import BoardPage from '../../../features/Board/components/BoardPage';

type Props = {
  id: string;
};

const Board: NextPage<Props> = ({ id }) => {
  return <BoardPage id={id} />;
};

export default Board;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};
