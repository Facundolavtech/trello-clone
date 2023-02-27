import { Center, Heading, Icon } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { FC } from 'react';
import { MdError } from 'react-icons/md';

type Props = {
  error: AxiosError<any>;
};

const BoardPageError: FC<Props> = ({ error }) => {
  return (
    <Center width="full" mt="35px" gap={2}>
      <Icon as={MdError} fontSize={18} color="error" />
      <Heading color="error" fontWeight={500} fontSize={18}>
        {error.response?.data?.message}
      </Heading>
    </Center>
  );
};

export default BoardPageError;
