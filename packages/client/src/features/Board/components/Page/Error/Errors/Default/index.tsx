import { FC } from 'react';
import { VStack, Icon, Heading, Center } from '@chakra-ui/react';
import { BiError } from 'react-icons/bi';
import { AxiosError } from 'axios';

type Props = {
  error: AxiosError<any, any> | null;
};

const Default: FC<Props> = ({ error }) => {
  return (
    <Center>
      <VStack backgroundColor="gray.100" borderRadius="8px" padding={8} spacing={4}>
        <Icon as={BiError} color="error" fontSize={42} />
        <Heading fontSize={20} fontWeight={500} color="error">
          {error ? error.response?.data.message : 'Unknown error'}
        </Heading>
      </VStack>
    </Center>
  );
};

export default Default;
