import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import http from '../../config/http';
import { ApiRoutes, AppRoutes } from '../../config/routes';

const excludedPaths = ['/login', '/register'];

const withSession = (Component) => {
  const Wrapped = (props) => {
    const router = useRouter();
    const toast = useToast();

    const isExcludedRoute = excludedPaths.includes(router.pathname);

    const { isLoading, error, isSuccess } = useQuery(['auth/status'], () => http.api.get(`${ApiRoutes.AUTH}/status`), {
      onSuccess: () => handleSessionSuccess(),
      onError: () => handleSessionError(),
    });

    function handleSessionError() {
      if (isExcludedRoute) return;
      router.push(AppRoutes.LOGIN);

      toast({
        title: 'Session Expired',
        description: 'Please login again',
        status: 'error',
        duration: 2000,
        isClosable: false,
        position: 'top-right',
        variant: 'solid',
      });
    }

    function handleSessionSuccess() {
      if (!isExcludedRoute) return;

      router.push(AppRoutes.DASHBOARD);
    }

    if (isLoading) return null;

    if (error) {
      if (!isExcludedRoute) {
        router.push(AppRoutes.LOGIN);
        return null;
      }
    }

    if (isSuccess) {
      if (isExcludedRoute) {
        router.push(AppRoutes.DASHBOARD);
        return null;
      }
    }

    return <Component {...props} />;
  };

  return Wrapped;
};

export default withSession;
