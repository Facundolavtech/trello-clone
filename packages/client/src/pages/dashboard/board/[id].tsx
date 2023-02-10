import { GetServerSidePropsContext, NextPage } from 'next';
import BoardPage from '../../../features/Board/components/BoardPage';
import BoardContextWrapper from '../../../features/Board/context/board';

type Props = {
  id: string;
};

const Board: NextPage<Props> = ({ id }) => {
  return (
    <BoardContextWrapper>
      <BoardPage id={id} />
    </BoardContextWrapper>
  );
};

export default Board;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      id: ctx.params?.id,
    },
  };
};
