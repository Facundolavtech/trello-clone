import { GetServerSidePropsContext } from 'next';
import withSession from '../../../hoc/withSession';
import BoardPage from '../../../features/Board/components/BoardPage';

const Board = ({ id }) => {
  return <BoardPage id={id} />;
};

export default withSession(Board);

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};
