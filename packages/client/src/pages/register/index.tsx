import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import AuthLayout from '../../layout/Auth';
import RegisterForm from '../../features/Auth/components/Form/Register';
import { GetServerSidePropsContext, NextPage } from 'next';
import { ApiRoutes, AppRoutes } from '../../config/routes';
import http from '../../config/http';

const Register: NextPage = () => {
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

export default Register;

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
