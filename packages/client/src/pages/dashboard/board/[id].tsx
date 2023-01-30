import { Text } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import SEO from '../../../components/SEO';
import http from '../../../config/http';
import { ApiRoutes } from '../../../config/routes';
import { withSession } from '../../../hoc/withSession';
import DashboardLayout from '../../../layout/Dashboard';
import { IBoard } from '../../../models/board.model';

const Board = () => {
  const router = useRouter();

  const getBoardQuery = useQuery('boards/id', async () => {
    const response: AxiosResponse<IBoard> = await http.api.get(`${ApiRoutes.BOARD}/${router.query.id}`);

    return response.data;
  });

  if (getBoardQuery.isLoading) return null;

  if (getBoardQuery.error) return null;

  return (
    <>
      <SEO title={getBoardQuery.data?.title} />
      <DashboardLayout>
        <Text>{JSON.stringify(getBoardQuery.data, null, 2)}</Text>
      </DashboardLayout>
    </>
  );
};

export default withSession(Board);
