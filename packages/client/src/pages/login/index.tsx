import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import SEO from '../../components/SEO';
import http from '../../config/http';
import { ApiRoutes, AppRoutes } from '../../config/routes';
import AuthCard from '../../features/Auth/components/Card';
import LoginForm from '../../features/Auth/components/Form/Login';
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

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    await http.api.get(`${ApiRoutes.AUTH}/status`, {
      headers: {
        Cookie: ctx.req.headers.cookie!,
      },
    });

    return {
      redirect: {
        permanent: false,
        destination: AppRoutes.DASHBOARD,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};
