import { MdError } from 'react-icons/md';
import { Box, Icon } from '@chakra-ui/react';

const Error = () => {
  return (
    <Box width="32px" height="32px" display="flex" alignItems="center" justifyContent="center">
      <Icon as={MdError} fontSize={32} color="error" />
    </Box>
  );
};

export default Error;
