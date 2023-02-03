import { FC, ReactNode } from 'react';
import Header from '../../components/Dashboard/Header';
import useUserProfile from '../../hooks/useUserProfile';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  useUserProfile();

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DashboardLayout;
