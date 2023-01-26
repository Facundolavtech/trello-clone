import { Box } from '@chakra-ui/react';
import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import AuthLayout from '../../layout/Auth';

const Login = () => {
  return (
    <>
      <SEO title="Login" />
      <AuthLayout>
        <AuthCard formType="login">
          <Box></Box>
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default Login;
