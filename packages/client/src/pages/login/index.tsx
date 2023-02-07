import { NextPage } from 'next';
import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import LoginForm from '../../features/Auth/components/Form/Login';
import AuthLayout from '../../layout/Auth';

const Login: NextPage = () => {
  return (
    <>
      <SEO title="Login" />
      <AuthLayout>
        <AuthCard formType="login" form={<LoginForm />} />
      </AuthLayout>
    </>
  );
};

export default Login;
