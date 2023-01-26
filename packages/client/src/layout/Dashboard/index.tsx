import { FC, ReactNode } from 'react';
import Header from '../../components/Dashboard/Header';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DashboardLayout;
