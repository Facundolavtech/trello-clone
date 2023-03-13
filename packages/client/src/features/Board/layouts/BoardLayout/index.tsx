import { FC, ReactNode } from 'react';
import WrappedContainer from '../../../../components/Containers/Wrapped';
import SEO from '../../../../components/SEO';
import DashboardLayout from '../../../../layout/Dashboard';
import BoardPageError from '../../components/Page/Error';
import useBoard from '../../hooks/useBoard';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';

type Props = {
  children: ReactNode;
};

const BoardLayout: FC<Props> = ({ children }) => {
  const boardId = useBoardIdFromRoute();

  const { data: board, error } = useBoard({ id: boardId });

  return (
    <DashboardLayout>
      <SEO title={board?.title} />
      <WrappedContainer>{error ? <BoardPageError error={error} /> : children}</WrappedContainer>
    </DashboardLayout>
  );
};

export default BoardLayout;
