import { NextPage } from 'next';
import SEO from 'components/SEO';
import LoginForm from 'features/Auth/components/Form/Login';
import AuthLayout from 'layout/Auth';
import AuthCard from 'features/Auth/components/Card';

const Login: NextPage = () => {
  return (
    <AuthLayout>
      <SEO title="Login" />
      <AuthCard formType="login" form={<LoginForm />} />
    </AuthLayout>
  );
};

export default Login;
