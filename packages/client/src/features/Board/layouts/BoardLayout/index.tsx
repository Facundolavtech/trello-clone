import { FC, ReactNode } from 'react';
import WrappedContainer from '../../../../components/Containers/Wrapped';
import DashboardLayout from '../../../../layout/Dashboard';
import BoardPageError from '../../components/Page/Error';
import useBoard from '../../hooks/useBoard';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';

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
