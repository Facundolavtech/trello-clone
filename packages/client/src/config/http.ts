import config from '.';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import Router from 'next/router';
import { AppRoutes } from './routes';

const { toast } = createStandaloneToast();

const http = {
  api: axios.create({
    baseURL: config.Api.BaseURL,
    withCredentials: true,
  }),
};

export default http;

let isHandlingError = false;

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
      } catch (error) {
      } finally {
        toast({
          position: 'top-right',
          title: 'Error',
          description: error.response.data.message,
          status: 'error',
          duration: 2000,
          isClosable: false,
        });
        Router.push(AppRoutes.LOGIN);
      }
    }

    return Promise.reject(error);
  }
);
