import { GetServerSidePropsContext, NextPage } from 'next';
import withSession from '../../../hoc/withSession';
import BoardPage from '../../../features/Board/components/BoardPage';

type Props = {
  id: string;
};

const Board: NextPage<Props> = ({ id }) => {
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
