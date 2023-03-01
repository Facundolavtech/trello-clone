import { useToast } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { AppRoutes } from '../../../../config/routes';
import { ILoginFormValues } from '../../components/Form/Login';
import { IRegisterFormValues } from '../../components/Form/Register';
import { ILoginWithSocialProviderParams, loginWithLocalProvider, loginWithSocialProvider, registerWithLocalProvider } from '../../services/auth.service';
import { deleteSessionCookie } from '../../../../utils/sessionCookie';

const useAuthMethods = () => {
  const router = useRouter();
  const toast = useToast();
  const queryClient = useQueryClient();

  const loginSocialMutation = useMutation(({ provider, token }: ILoginWithSocialProviderParams) => loginWithSocialProvider({ provider, token }), {
    mutationKey: ['auth/social'],
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

  const loginLocalMutation = useMutation((credentials: ILoginFormValues) => loginWithLocalProvider(credentials), {
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
    },
    onError: (err: AxiosError<any>) => {
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

  const registerLocalMutation = useMutation((credentials: IRegisterFormValues) => registerWithLocalProvider(credentials), {
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

  const logout = () => {
    deleteSessionCookie();
    queryClient.removeQueries();
    router.push(AppRoutes.LOGIN);
  };

  const loginSocialIsMutating = useIsMutating(['auth/social']) > 0;

  return {
    loginSocialMutation,
    loginLocalMutation,
    registerLocalMutation,
    logout,
    loginSocialIsMutating,
  };
};

export default useAuthMethods;
