import { useToast } from '@chakra-ui/react';
import { MutationCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';

const useQueryClient = () => {
  const toast = useToast();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 130000,
            retry: false,
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
