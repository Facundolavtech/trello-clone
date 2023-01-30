import SEO from '../../components/SEO';
import AuthCard from '../../features/Auth/components/Card';
import AuthLayout from '../../layout/Auth';
import RegisterForm from '../../features/Auth/components/Form/Register';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApiRoutes, AppRoutes } from '../../config/routes';
import http from '../../config/http';

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

export default Register;

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
