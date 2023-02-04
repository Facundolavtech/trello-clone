import { Heading, HStack, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import WrappedContainer from '../../components/Containers/Wrapped';
import SEO from '../../components/SEO';
import BoardList from '../../features/Board/components/BoardList';
import NewBoardButton from '../../features/Board/components/Buttons/NewBoard';
import withSession from '../../hoc/withSession';
import DashboardLayout from '../../layout/Dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <SEO title="Dashboard" />
      <DashboardLayout>
        <WrappedContainer>
          <VStack spacing="40px" mt="60px" width="full">
            <HStack width="full" justifyContent="space-between">
              <Heading fontWeight={500} fontSize={18} color="gray.1">
                All boards
              </Heading>
              <NewBoardButton />
            </HStack>
            <BoardList />
          </VStack>
        </WrappedContainer>
      </DashboardLayout>
    </>
  );
};

export default withSession(Dashboard);
