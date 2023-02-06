import { FC, ReactNode, useEffect } from 'react';
import Header from '../../components/Dashboard/Header';
import useUserProfile from '../../hooks/useUserProfile';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const userProfileQuery = useUserProfile();

  useEffect(() => {
    userProfileQuery.refetch();
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DashboardLayout;
