import { FC } from 'react';
import { HStack, Stack, VStack } from '@chakra-ui/react';
import useBoard from '../../hooks/useBoard';
import BoardLayout from '../../layouts/BoardLayout';
import BoardMembers from '../Members';
import PrivacyBoardButton from '../Buttons/Privacy';
import ShowBoardMenuButton from '../Buttons/ShowMenu';
import Lists from '../../../BoardList/components/Lists';
import Error from './Error';

type Props = {
  id: string;
};

const BoardPage: FC<Props> = ({ id }) => {
  const { data, error } = useBoard({ id });

  if (error) {
    return (
      <BoardLayout>
        <Error error={error} />
      </BoardLayout>
    );
  }

  return (
    <BoardLayout title={data?.title}>
      <Stack width="full" mt="35px">
        <Stack width="full" direction={{ base: 'column', md: 'row' }} pb={10}>
          <VStack width="full" alignItems="flex-start" spacing="52px">
            <HStack width="full" justifyContent="space-between">
              <HStack spacing="19px" width="full">
                <PrivacyBoardButton />
                <BoardMembers />
              </HStack>
              <ShowBoardMenuButton />
            </HStack>
            <HStack width="full" spacing="35px" overflowX="auto" alignItems="flex-start">
              <Lists />
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </BoardLayout>
  );
};

export default BoardPage;
