import { useRouter } from 'next/router';
import { useIsMutating, useMutation, useQueryClient } from '@tanstack/react-query';
import { AppRoutes } from 'config/routes';
import { ILoginFormValues } from 'features/Auth/components/Form/Login';
import { IRegisterFormValues } from 'features/Auth/components/Form/Register';
import { ILoginWithSocialProviderParams, loginWithLocalProvider, loginWithSocialProvider, registerWithLocalProvider } from 'features/Auth/services/auth.service';
import { deleteSessionCookie } from 'utils/sessionCookie';

const useAuthMethods = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const loginSocialMutation = useMutation(({ provider, token }: ILoginWithSocialProviderParams) => loginWithSocialProvider({ provider, token }), {
    mutationKey: ['auth/social'],
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
    },
  });

  const loginLocalMutation = useMutation((credentials: ILoginFormValues) => loginWithLocalProvider(credentials), {
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
    },
  });

  const registerLocalMutation = useMutation((credentials: IRegisterFormValues) => registerWithLocalProvider(credentials), {
    onSuccess: () => {
      return router.push(AppRoutes.DASHBOARD);
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
