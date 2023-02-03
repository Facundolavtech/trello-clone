import { Heading, Icon, VStack } from '@chakra-ui/react';
import { MdError } from 'react-icons/md';

const Error = () => {
  return (
    <VStack width="full" justifyContent="center" alignItems="center" spacing={4}>
      <Icon as={MdError} width={10} height={10} color="error" />
      <Heading color="error" fontWeight={500} fontSize={22}>
        An error occurred while trying to get the boards
      </Heading>
    </VStack>
  );
};

export default Error;
