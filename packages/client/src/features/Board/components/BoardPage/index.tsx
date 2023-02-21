import { FC } from 'react';
import { Box, Flex, HStack, Stack, VStack } from '@chakra-ui/react';
import useBoard from '../../hooks/useBoard';
import BoardLayout from '../../layouts/BoardLayout';
import BoardMembers from '../Members';
import BoardPrivacy from '../BoardPrivacy';
import ShowBoardMenuButton from '../Buttons/ShowMenu';
import Lists from '../../../BoardList/components/Lists';
import Error from './Error';
import BoardMenu from '../Menu';
import useBoardIdFromRoute from '../../hooks/useBoardIdFromRoute';

type Props = {};

const BoardPage: FC<Props> = () => {
  const boardId = useBoardIdFromRoute();

  const { data, error } = useBoard({ id: boardId });

  if (error) {
    return (
      <BoardLayout>
        <Error error={error} />
      </BoardLayout>
    );
  }

  return (
    <BoardLayout title={data?.title}>
      <BoardMenu />
      <Stack width="full" mt="35px">
        <Stack width="full" direction={{ base: 'column', md: 'row' }} mb={10}>
          <VStack width="full" alignItems="flex-start" spacing="52px">
            <HStack width="full" justifyContent="space-between">
              <Flex gap="19px" width="full">
                <BoardPrivacy />
                <BoardMembers />
              </Flex>
              <ShowBoardMenuButton />
            </HStack>
            <Box
              display="flex"
              width="100%"
              gap="35px"
              position="relative"
              overflowX="auto"
              overflowY="hidden"
              height={data ? 480 : 'auto'}
              alignItems="flex-start"
              backdropFilter="blur(10px)"
              borderRadius="12px"
              padding={8}
              backgroundColor={data ? 'rgba(248, 248, 248, 0.7)' : 'none'}
              className="custom__scrollbar"
            >
              <Lists />
            </Box>
          </VStack>
        </Stack>
      </Stack>
    </BoardLayout>
  );
};

export default BoardPage;
