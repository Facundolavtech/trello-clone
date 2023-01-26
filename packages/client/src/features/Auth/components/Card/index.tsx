import { FC, ReactNode } from 'react';
import { Box, Center, VStack } from '@chakra-ui/react';
import Logo from '../../../../components/Logo';
import AuthTitle from '../Title';

type Props = {
  formType: 'login' | 'register';
  children: ReactNode;
};

const AuthCard: FC<Props> = ({ formType = 'login', children }) => {
  return (
    <Box padding={12} width="full" maxWidth={400} bg="white" borderRadius={8}>
      <VStack spacing={12} width="full" alignItems="flex-start">
        <Center width="full">
          <Logo width="64px" height="64px" withTitle={false} />
        </Center>
        <AuthTitle title={formType === 'login' ? 'Login' : 'Register'} />
        {children}
      </VStack>
    </Box>
  );
};

export default AuthCard;
