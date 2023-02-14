import { setCookies } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookies(config.Auth.CookieName, token, { req, res, ...config.Auth.Cookie });
}

export function deleteSessionCookie() {
  return (document.cookie = `${config.Auth.CookieName}=; Max-Age=0; Path=/;`);
}
