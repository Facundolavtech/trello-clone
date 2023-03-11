import { setCookies } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookies(config.AUTH.COOKIE_NAME, token, { req, res, ...config.AUTH.COOKIE_OPTIONS });
}

export function deleteSessionCookie() {
  return (document.cookie = `${config.AUTH.COOKIE_NAME}=; Max-Age=0; Path=/;`);
}
