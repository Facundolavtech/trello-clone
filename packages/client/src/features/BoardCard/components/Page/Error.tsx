import { FC } from 'react';
import { Center, Heading, Icon, VStack } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { BiError } from 'react-icons/bi';

type Props = {
  error: AxiosError<any>;
};

const Error: FC<Props> = ({ error }) => {
  return (
    <Center width="full" mt="35px">
      <VStack spacing={4}>
        <Icon as={BiError} fontSize={42} color="error" />
        <Heading textAlign="center" color="error" fontWeight={500} fontSize={18}>
          {error.response?.data.message || 'Unknown error'}
        </Heading>
      </VStack>
    </Center>
  );
};

export default Error;
