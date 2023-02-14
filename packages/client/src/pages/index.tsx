import type { GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next';
import config from '../config';
import { AppRoutes } from '../config/routes';

const Home: NextPage = () => {
  return null;
};

export default Home;

export const getServerSideProps = (ctx: GetServerSidePropsContext): GetServerSidePropsResult<{}> => {
  const cookie = ctx.req.cookies[config.Auth.CookieName];

  return {
    redirect: {
      destination: `${cookie ? AppRoutes.DASHBOARD : AppRoutes.LOGIN}`,
      permanent: false,
    },
  };
};
