import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import useUser from '../../hooks/useUser';
import { AppRoutes } from '../../config/routes';
import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';

export const withSession = (Component: any) => {
  const Wrapped = (props: any) => {
    const { getProfile } = useUser();
    const toast = useToast();

    const router = useRouter();

    const { error, isLoading } = useQuery('user/profile', () => getProfile(), {
      onError(err: AxiosError<any, any>) {
        toast({
          title: 'Error',
          description: err.response?.data?.message,
          status: 'error',
          position: 'top-right',
          variant: 'solid',
          duration: 2000,
          isClosable: false,
        });
        return router.push(AppRoutes.LOGIN);
      },
    });

    if (isLoading || error) return null;

    return <Component {...props} />;
  };

  return Wrapped;
};
