import { GetServerSidePropsContext, NextPage } from 'next';
import BoardPage from '../../../features/Board/components/BoardPage';
import BoardContextWrapper from '../../../features/Board/context/board';
import useBoard from '../../../features/Board/hooks/useBoard';

type Props = {
  id: string;
};

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const Board: NextPage<Props> = ({ id }) => {
  const { data: board } = useBoard({ id });

  return (
    <BoardContextWrapper>
      <style jsx global>{`
        body {
          background-image: url(${board && board.cover});
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}</style>
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
