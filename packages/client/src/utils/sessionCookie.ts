import { setCookies } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookies('thullo:sid', token, { req, res, ...config.Auth.Cookie });
}
