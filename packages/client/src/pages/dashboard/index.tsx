import { Heading, HStack, VStack } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import { NextPage } from 'next';
import AddButton from '../../components/Buttons/Add';
import WrappedContainer from '../../components/Containers/Wrapped';
import SEO from '../../components/SEO';
import BoardList from '../../features/Board/components/BoardList';
import CreateBoardModal from '../../features/Board/components/Modals/Create';
import DashboardLayout from '../../layout/Dashboard';

const Dashboard: NextPage = () => {
  return (
    <>
      <SEO title="Dashboard" />
      <DashboardLayout>
        <WrappedContainer>
          <VStack spacing="40px" my="60px" width="full">
            <HStack width="full" justifyContent="space-between">
              <Heading fontWeight={500} fontSize={18} color="gray.1">
                All boards
              </Heading>
              <AddButton
                label="Add"
                width="64px"
                height="30px"
                styles={{ gap: 4 }}
                iconStyles={{ fontSize: 10 }}
                onClick={() => NiceModal.show(CreateBoardModal)}
                labelStyles={{ fontSize: 10, fontWeight: 500 }}
              />
            </HStack>
            <BoardList />
          </VStack>
        </WrappedContainer>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
