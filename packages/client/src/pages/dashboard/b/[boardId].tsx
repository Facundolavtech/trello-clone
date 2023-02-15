import { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import BoardPage from '../../../features/Board/components/BoardPage';
import BoardContextWrapper from '../../../features/Board/context/board';
import useBoard from '../../../features/Board/hooks/useBoard';

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
    <BoardContextWrapper>
      <style jsx global>{`
        body {
          background-image: url(${board?.cover});
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}</style>
      <BoardPage />
    </BoardContextWrapper>
  );
};

export default Board;

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<{}>> => {
  const boardId = ctx.params?.boardId as string;

  return {
    props: {
      boardId,
    },
  };
};
