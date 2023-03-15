import config from '.';
import axios from 'axios';
import { AppRoutes } from './routes';
import { getCookie } from 'cookies-next';
import { deleteSessionCookie } from '../utils/sessionCookie';

const http = {
  api: axios.create({
    baseURL: config.API.BaseURL,
  }),
};

export default http;

let isHandlingError = false;

http.api.interceptors.request.use((cfg) => {
  const token = getCookie(config.AUTH.COOKIE_NAME);

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

      if (typeof window !== 'undefined') {
        window.location.href = AppRoutes.LOGIN;
      }
    }

    return Promise.reject(error);
  }
);
