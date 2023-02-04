import type { GetServerSidePropsContext, NextPage } from 'next';
import http from '../config/http';
import { ApiRoutes, AppRoutes } from '../config/routes';

const Home: NextPage = () => {
  return null;
};

export default Home;

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
        redirect: {
          destination: AppRoutes.LOGIN,
          permanent: false,
        },
        props: {},
      };
    }
  }

  return {
    redirect: {
      destination: AppRoutes.LOGIN,
      permanent: false,
    },
    props: {},
  };
}
