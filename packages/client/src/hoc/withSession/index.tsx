import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import http from '../../config/http';
import { ApiRoutes, AppRoutes } from '../../config/routes';

const withSession = (Component) => {
  const Wrapped = (props) => {
    const router = useRouter();
    const toast = useToast();

    const { isLoading, error } = useQuery(['auth/status'], () => http.api.get(`${ApiRoutes.AUTH}/status`), {
      onError: () => handleSessionError(),
    });

    function handleSessionError() {
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

    if (isLoading || error) return null;

    return <Component {...props} />;
  };

  return Wrapped;
};

export default withSession;
