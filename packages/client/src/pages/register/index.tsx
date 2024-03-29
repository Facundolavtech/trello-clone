import SEO from 'components/SEO';
import AuthCard from 'features/Auth/components/Card';
import AuthLayout from 'layout/Auth';
import RegisterForm from 'features/Auth/components/Form/Register';
import { NextPage } from 'next';

const Register: NextPage = () => {
  return (
    <AuthLayout>
      <SEO title="Register" />
      <AuthCard formType="register" form={<RegisterForm />} />
    </AuthLayout>
  );
};

export default Register;
