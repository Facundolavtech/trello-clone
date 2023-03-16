import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useQueryClient = () => {
  const toast = useToast();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            refetchOnWindowFocus: false,
            staleTime: 60000,
            cacheTime: 60000,
            retry: false,
            useErrorBoundary: (error: any) => error.response?.status >= 500,
          },
        },
        mutationCache: new MutationCache({
          onError: (error) => {
            const { response } = error as AxiosError<any>;

            toast({
              title: 'Error',
              description: response?.data.message || 'Unknown error',
              status: 'error',
              isClosable: false,
              duration: 2000,
              position: 'top-right',
            });
          },
        }),
      })
  );

  return queryClient;
};

export default useQueryClient;
