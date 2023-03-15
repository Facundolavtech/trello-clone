import { FC, ReactNode } from 'react';
import WrappedContainer from 'components/Containers/Wrapped';
import DashboardLayout from 'layout/Dashboard';
import BoardPageError from 'features/Board/components/Page/Error';
import useBoard from 'features/Board/hooks/useBoard';
import useBoardIdFromRoute from 'features/Board/hooks/useBoardIdFromRoute';

type Props = {
  children: ReactNode;
};

const BoardLayout: FC<Props> = ({ children }) => {
  const boardId = useBoardIdFromRoute();

  const { error } = useBoard({ id: boardId });

  return (
    <DashboardLayout>
      <WrappedContainer>{error ? <BoardPageError error={error} /> : children}</WrappedContainer>
    </DashboardLayout>
  );
};

export default BoardLayout;
