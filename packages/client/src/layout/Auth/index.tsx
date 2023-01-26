import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Box width="full" px={16} height="100vh" bg="blue.1" display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

export default AuthLayout;
