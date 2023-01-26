import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Box width="full" px={{ base: 8, md: 16 }} py={{ base: 8, md: 16 }} height="full" bg="blue.1" display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};

export default AuthLayout;
