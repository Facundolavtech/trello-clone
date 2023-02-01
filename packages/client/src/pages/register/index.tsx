import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import AuthLayout from '../../layout/Auth';
import RegisterForm from '../../features/Auth/components/Form/Register';
import { withSession } from '../../hoc/withSession';

const Register = () => {
  return (
    <>
      <SEO title="Register" />
      <AuthLayout>
        <AuthCard formType="register">
          <RegisterForm />
        </AuthCard>
      </AuthLayout>
    </>
  );
};

export default withSession(Register);
