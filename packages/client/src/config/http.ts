import config from '.';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { getCookie } from 'cookies-next';
import { deleteSessionCookie } from '../utils/sessionCookie';

const { toast } = createStandaloneToast();

const http = {
  api: axios.create({
    baseURL: config.Api.BaseURL,
  }),
};

export default http;

let isHandlingError = false;

http.api.interceptors.request.use((cfg) => {
  const token = getCookie(config.Auth.CookieName);
  if (token) {
    cfg.headers['Authorization'] = `Bearer ${token}`;
  } else {
    if (typeof window !== 'undefined') {
      window.location.href = AppRoutes.LOGIN;
    }
  }
  return cfg;
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
      deleteSessionCookie();

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

    return Promise.reject(error);
  }
);
