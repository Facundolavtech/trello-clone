import { GetServerSidePropsContext, NextPage } from 'next';
import SEO from '../../components/SEO';
import http from '../../config/http';
import { ApiRoutes, AppRoutes } from '../../config/routes';
import AuthCard from '../../features/Auth/components/Card';
import LoginForm from '../../features/Auth/components/Form/Login';
import AuthLayout from '../../layout/Auth';

const Login: NextPage = () => {
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies['thullo.sess'];

  if (token) {
    try {
      await http.api.get(`${ApiRoutes.AUTH}/status`, {
        headers: {
          Cookie: `thullo.sess=${token};`,
        },
      });

      return {
        redirect: {
          destination: AppRoutes.DASHBOARD,
          permanent: false,
        },
        props: {},
      };
    } catch {
      ctx.res.setHeader('Set-Cookie', 'thullo.sess=; Max-Age=0');

      return {
        props: {},
      };
    }
  }

  return {
    props: {},
  };
}
