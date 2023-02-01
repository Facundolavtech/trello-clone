import { FC, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/Dashboard/Header';
import useUser from '../../hooks/useUser';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { getProfile } = useUser();

  useQuery(['user/profile'], getProfile);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DashboardLayout;
