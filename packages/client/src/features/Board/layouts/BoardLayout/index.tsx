import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import WrappedContainer from '../../../../components/Containers/Wrapped';
import SEO from '../../../../components/SEO';
import DashboardLayout from '../../../../layout/Dashboard';

type Props = {
  title?: string;
  children: ReactNode;
};

const BoardLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <DashboardLayout>
        <WrappedContainer>
          <Stack width="full" mt="35px">
            {children}
          </Stack>
        </WrappedContainer>
      </DashboardLayout>
    </>
  );
};

export default BoardLayout;
