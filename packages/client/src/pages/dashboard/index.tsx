import { Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import WrappedContainer from '../../components/Containers/Wrapped';
import SEO from '../../components/SEO';
import http from '../../config/http';
import { ApiRoutes } from '../../config/routes';
import Board from '../../features/Board/components/Board';
import NewBoardButton from '../../features/Board/components/Buttons/NewBoard';
import { withSession } from '../../hoc/withSession';
import DashboardLayout from '../../layout/Dashboard';
import { IBoard } from '../../models/board.model';

const Dashboard = () => {
  const getBoardsQuery = useQuery('boards/all', async () => {
    const response: AxiosResponse<IBoard[]> = await http.api.get(`${ApiRoutes.BOARD}`);
    return response.data;
  });

  if (getBoardsQuery.isLoading) return null;

  if (getBoardsQuery.error) return null;

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
              {getBoardsQuery.data?.map((board) => (
                <Board key={board.id} board={board} />
              ))}
            </SimpleGrid>
          </VStack>
        </WrappedContainer>
      </DashboardLayout>
    </>
  );
};

export default withSession(Dashboard);
