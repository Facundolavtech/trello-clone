import { FC } from 'react';
import { Flex, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import useBoard from '../../hooks/useBoard';
import BoardLayout from '../../layouts/BoardLayout';
import BoardMembers from '../Members';
import BoardPrivacy from '../BoardPrivacy';
import ShowBoardMenuButton from '../Buttons/ShowMenu';
import Lists from '../../../BoardList/components/Lists';
import Error from './Error';
import Button from '../../../../components/Button';
import { FontFamily } from '../../../../theme/constants';
import { AiOutlinePlus } from 'react-icons/ai';

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
        <Stack width="full" direction={{ base: 'column', md: 'row' }} mb={10}>
          <VStack width="full" alignItems="flex-start" spacing="52px">
            <HStack width="full" justifyContent="space-between">
              <Flex gap="19px" width="full">
                <BoardPrivacy />
                <BoardMembers />
              </Flex>
              <ShowBoardMenuButton />
            </HStack>
            <HStack
              width="100%"
              spacing="35px"
              position="relative"
              overflow="auto"
              height={data ? 600 : 'auto'}
              alignItems="flex-start"
              borderRadius="12px"
              padding={8}
              backgroundColor={data ? '#f8f8f8' : 'none'}
              className="board__canvas"
            >
              <Lists />
              {data && (
                <Button minWidth="244px" height="32px" variant="primary" style={{ background: '#DAE4FD', justifyContent: 'space-between' }}>
                  <Text color="blue.1" fontWeight={500} fontSize={12} fontFamily={FontFamily.NotoSans}>
                    Add another list
                  </Text>
                  <Icon as={AiOutlinePlus} color="blue.1" fontSize={12} />
                </Button>
              )}
            </HStack>
          </VStack>
        </Stack>
      </Stack>
    </BoardLayout>
  );
};

export default BoardPage;
