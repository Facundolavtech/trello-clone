import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import LoginForm from '../../features/Auth/components/Form/Login';
import withSession from '../../hoc/withSession';
import AuthLayout from '../../layout/Auth';

const Login = () => {
  return (
    <>
      <SEO title="Login" />
      <AuthLayout>
        <AuthCard formType="login">
          <LoginForm />
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default withSession(Login);
