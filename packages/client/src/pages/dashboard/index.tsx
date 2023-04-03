import { Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import NiceModal from '@ebay/nice-modal-react';
import WrappedContainer from 'components/Containers/Wrapped';
import SEO from 'components/SEO';
import BoardList from 'features/Board/components/BoardList';
import CreateBoardModal from 'features/Board/components/Modals/Create';
import DashboardLayout from 'layout/Dashboard';
import Button from 'components/Button';
import { AiOutlinePlus } from 'react-icons/ai';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <WrappedContainer>
        <SEO title="Dashboard" />
        <VStack spacing="40px" my="60px" width="full">
          <HStack width="full" justifyContent="space-between" as="section">
            <Heading fontWeight={500} fontSize={18} color="gray.1">
              All boards
            </Heading>
            <Button variant="primary" width="64px" height="30px" gap="4px" onClick={() => NiceModal.show(CreateBoardModal)}>
              <Icon as={AiOutlinePlus} color="white" fontSize={10} />
              <Text fontSize={10} fontWeight={500}>
                Add
              </Text>
            </Button>
          </HStack>
          <BoardList />
        </VStack>
      </WrappedContainer>
    </DashboardLayout>
  );
};

export default DashboardPage;
