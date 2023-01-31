import { Heading, Icon, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { MdError } from 'react-icons/md';
import { useQuery } from 'react-query';
import Card from '../../../../components/Card';
import http from '../../../../config/http';
import { ApiRoutes } from '../../../../config/routes';
import { IBoard } from '../../../../models/board.model';
import Board from '../Board';

const BoardList = () => {
  const getBoardsQuery = useQuery('boards/all', async () => {
    const response: AxiosResponse<IBoard[]> = await http.api.get(`${ApiRoutes.BOARD}`);
    return response.data;
  });

  if (getBoardsQuery.isLoading) {
    return (
      <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
        {new Array(4).fill(4).map((_, index) => {
          return (
            <Card key={index} variant="board-card" height="230px">
              <Skeleton width="full" height="full" />
            </Card>
          );
        })}
      </SimpleGrid>
    );
  }

  if (getBoardsQuery.error) {
    return (
      <VStack width="full" justifyContent="center" alignItems="center" spacing={4}>
        <Icon as={MdError} width={10} height={10} color="error" />
        <Heading color="error" fontWeight={500} fontSize={22}>
          An error occurred while trying to get the boards
        </Heading>
      </VStack>
    );
  }

  return (
    <SimpleGrid width="full" gap={8} columns={{ base: 1, md: 3, lg: 4 }}>
      {getBoardsQuery.data?.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </SimpleGrid>
  );
};

export default BoardList;
