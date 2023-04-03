import { Flex, HStack, Stack, VStack } from '@chakra-ui/react';
import BoardLayout from 'features/Board/layouts/BoardLayout';
import BoardMembers from 'features/Board/components/Members';
import BoardPrivacy from 'features/Board/components/BoardPrivacy';
import ShowBoardMenuButton from 'features/Board/components/Buttons/ShowMenu';
import Lists from 'features/BoardList/components/Lists';
import BoardMenu from 'features/Board/components/Menu';
import BoardCanvas from 'features/Board/components/Canvas';
import BoardContextWrapper from 'features/Board/context/board';

const BoardPage = () => {
  return (
    <BoardContextWrapper>
      <BoardLayout>
        <BoardMenu />
        <Stack width="full" mt="35px">
          <Stack width="full" direction={{ base: 'column', md: 'row' }} mb={10}>
            <VStack width="full" alignItems="flex-start" spacing="52px">
              <HStack width="full" justifyContent="space-between" as="section">
                <Flex gap="19px" width="full">
                  <BoardPrivacy />
                  <BoardMembers />
                </Flex>
                <ShowBoardMenuButton />
              </HStack>
              <BoardCanvas>
                <Lists />
              </BoardCanvas>
            </VStack>
          </Stack>
        </Stack>
      </BoardLayout>
    </BoardContextWrapper>
  );
};

export default BoardPage;
