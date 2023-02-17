import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import Header from '../../components/Dashboard/Header';
import useUserProfile from '../../hooks/useUserProfile';
import { HeaderStyles } from '../../theme/constants';

type Props = {
  children: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  useUserProfile();

  return (
    <>
      <Header />
      <Container maxWidth="unset" mt={`${HeaderStyles.height + 36}px`}>
        {children}
      </Container>
    </>
  );
};

export default DashboardLayout;
