import { FC, ReactNode } from 'react';
import WrappedContainer from 'components/Containers/Wrapped';
import DashboardLayout from 'layout/Dashboard';
import Error from 'features/Board/components/Page/Error';
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
      <WrappedContainer>{error ? <Error /> : children}</WrappedContainer>
    </DashboardLayout>
  );
};

export default BoardLayout;
