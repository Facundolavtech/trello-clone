import { FC } from 'react';
import { Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import useBoard from '../../hooks/useBoard';
import BoardLayout from '../../layouts/BoardLayout';
import BoardMembers from '../Members';
import PrivacyBoardButton from '../Buttons/Privacy';
import ShowBoardMenuButton from '../Buttons/ShowMenu';
import { MdError } from 'react-icons/md';

type Props = {
  id: string;
};

const BoardPage: FC<Props> = ({ id }) => {
  const { data, error } = useBoard({ id });

  if (error) {
    return (
      <BoardLayout>
        <Icon as={MdError} fontSize={18} color="error" />
        <Heading color="error" fontWeight={500} fontSize={18}>
          {error.response?.data?.message}
        </Heading>
      </BoardLayout>
    );
  }

  return (
    <BoardLayout title={data?.title}>
      <Stack width="full" direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'flex-start', md: 'space-between' }}>
        <HStack spacing="19px">
          <PrivacyBoardButton />
          <BoardMembers />
        </HStack>
        <ShowBoardMenuButton />
      </Stack>
    </BoardLayout>
  );
};

export default BoardPage;
