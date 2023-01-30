import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import http from '../../../config/http';
import { ApiRoutes, AppRoutes } from '../../../config/routes';
import { ILoginFormValues } from '../components/Form/Login';
import { IRegisterFormValues } from '../components/Form/Register';
import SocialProviders from '../constants/providers';

const useAuthMethods = () => {
  const router = useRouter();
  const toast = useToast();

  const loginSocialMutation = useMutation(
    ({ provider, token }: { provider: SocialProviders; token: string }) => http.api.post(`${ApiRoutes.AUTH}/${provider}`, { token }),
    {
      onSuccess: () => {
        return router.push(AppRoutes.DASHBOARD);
      },
      onError: (err: AxiosError<any, any>) => {
        toast({
          isClosable: false,
          status: 'error',
          title: err.response?.data.message,
          position: 'top-right',
          variant: 'solid',
          duration: 1500,
        });
      },
    }
  );

  const loginLocalMutation = useMutation((credentials: ILoginFormValues) => http.api.post(`${ApiRoutes.AUTH}/local/login`, credentials), {
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
    },
    onError: (err: AxiosError<any, any>) => {
      toast({
        isClosable: false,
        status: 'error',
        title: err.response?.data.message,
        position: 'top-right',
        variant: 'solid',
        duration: 1500,
      });
    },
  });

  const registerLocalMutation = useMutation((credentials: IRegisterFormValues) => http.api.post(`${ApiRoutes.AUTH}/local/register`, credentials), {
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
    },
    onError: (err: AxiosError<any, any>) => {
      toast({
        isClosable: false,
        status: 'error',
        title: err.response?.data.message,
        position: 'top-right',
        variant: 'solid',
        duration: 1500,
      });
    },
  });

  const logoutQuery = useQuery('auth/logout', () => http.api.get(`${ApiRoutes.AUTH}/logout`), {
    enabled: false,
    onSuccess: () => {
      return router.push(AppRoutes.LOGIN);
    },
  });

  return {
    loginSocialMutation,
    loginLocalMutation,
    registerLocalMutation,
    logout: logoutQuery.refetch,
  };
};

export default useAuthMethods;
