import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import SEO from '../../../../components/SEO';
import BoardPage from '../../../../features/Board/components/Page';
import useBoard from '../../../../features/Board/hooks/useBoard';

type Props = {
  boardId: string;
};

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const Board: NextPage<Props> = ({ boardId }) => {
  const { data: board } = useBoard({ id: boardId });

  return (
    <>
      <SEO title={board?.title} />
      <BoardPage />
    </>
  );
};

export default Board;

export const getServerSideProps = (ctx: GetServerSidePropsContext): GetServerSidePropsResult<{}> => {
  const boardId = ctx.params?.boardId as string;

  return {
    props: {
      boardId,
    },
  };
};
