import SEO from '../../components/SEO';
import { Box } from '@chakra-ui/react';
import AuthCard from '../../features/Auth/components/Card';
import AuthLayout from '../../layout/Auth';

const Register = () => {
  return (
    <>
      <SEO title="Register" />
      <AuthLayout>
        <AuthCard formType="register">
          <Box></Box>
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default Register;
