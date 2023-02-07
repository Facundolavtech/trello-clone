import config from '.';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { getCookie } from 'cookies-next';

const { toast } = createStandaloneToast();

const http = {
  api: axios.create({
    baseURL: config.Api.BaseURL,
  }),
};

export default http;

let isHandlingError = false;

http.api.interceptors.request.use((config) => {
  const token = getCookie('thullo:sid');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    if (typeof window !== 'undefined') {
      window.location.href = AppRoutes.LOGIN;
    }
  }
  return config;
});

http.api.interceptors.response.use(
  (response) => {
    if (isHandlingError) isHandlingError = false;

    return response;
  },
  async (error) => {
    if (isHandlingError) return Promise.reject(error);
    isHandlingError = true;

    if (error.response?.status === 401 && error.response?.data.code === 'TokenExpiredError') {
      try {
        await axios.get('/api/logout');
      } catch {
        return null;
      } finally {
        toast({
          position: 'top-right',
          title: 'Error',
          description: error.response.data.message,
          status: 'error',
          duration: 2000,
          isClosable: false,
        });

        if (typeof window !== 'undefined') {
          window.location.href = AppRoutes.LOGIN;
        }
      }
    }

    return Promise.reject(error);
  }
);
