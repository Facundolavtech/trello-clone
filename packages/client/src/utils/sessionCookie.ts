import { setCookie } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookie('thullo:sid', token, { req, res, ...config.Auth.Cookie });
}
