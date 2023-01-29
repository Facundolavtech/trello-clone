import { Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import WrappedContainer from '../../components/Containers/Wrapped';
import SEO from '../../components/SEO';
import Board from '../../features/Board/components/Board';
import NewBoardButton from '../../features/Board/components/Buttons/NewBoard';
import DashboardLayout from '../../layout/Dashboard';
import boards from '../../mocks/boards';

const Dashboard = () => {
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
            <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
              {boards.map((board) => (
                <Board key={board.id} board={board} />
              ))}
            </SimpleGrid>
          </VStack>
        </WrappedContainer>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
